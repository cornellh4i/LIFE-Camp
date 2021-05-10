import csv
import datetime
from db import db 
from db import Question, Survey, User
from flask import Flask, request
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_sqlalchemy import SQLAlchemy
from form import LoginForm
import json
from sqlalchemy import func
import sqlite3

#post reponse: responseID, question, and the separate answers
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# initialize app
db.init_app(app)
with app.app_context():
    db.create_all()

# generalized response formats
def success_response(data, code=200):
    return json.dumps({"success": True, "data": data}), code

def failure_response(message, code=404):
    return json.dumps({"success": False, "error": message}), code

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
bcrypt = Bcrypt()

@login_manager.user_loader
def user_loader(user_id):
    """Given *user_id*, return the associated User object.

    :param unicode user_id: user_id (email) user to retrieve

    """
    return User.query.get(user_id)    


@app.route("/login", methods=["GET", "POST"])
def login():
    """For GET requests, display the login form. 
    For POSTS, login the current user by processing the form.

    """
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.get(form.email.data)
        if user:
            if bcrypt.check_password_hash(user.password, form.password.data):
                user.authenticated = True
                db.session.add(user)
                db.session.commit()
                login_user(user, remember=True)
                return success_response(user)
    return failure_response("Invalid login")


@app.route("/logout", methods=["GET"])
@login_required
def logout():
    """Logout the current user."""
    user = current_user
    user.authenticated = False
    db.session.add(user)
    db.session.commit()
    logout_user()
    return success_response(user)


@app.route('/questions/')
@login_required
def all_questions():
   result = [q.serialize() for q in Question.query.all()]
   return success_response(result)


@app.route('/questions/', methods=["POST"])
@login_required
def add_question():
   body = json.loads(request.data)
   new_q = Question(text=body.get("text"), qtype=body.get("qtype"), stype=body.get("stype"))
   db.session.add(new_q)
   db.session.commit()
   return success_response(new_q.serialize(), 201)


@app.route('/responses/')
@login_required
def all_responses():
   result = [r.serialize() for r in Survey.query.all()]
   return success_response(result)


@app.route('/responses/', methods=["POST"])
@login_required
def add_response():
    body = json.loads(request.data)
    new_r = Survey(response_id=body.get("response_id"), description=body.get("description"), answer_text=body.get("answer_text"), question_id=body.get("question_id"))
    db.session.add(new_r)
    db.session.commit()
    return success_response(new_r.serialize(), 201)


@app.route('/responses/ct/<int:id>/')
@login_required
def get_cts(id):
    filtered = Survey.query.filter_by(question_id=id)
    all_cts = db.session.query(Survey.answer_text, func.count(Survey.answer_text)).group_by(Survey.answer_text).all()
    return success_response(dict(all_cts))


@app.route('/addressed/<int:survey_id>/', methods=["POST"])
@login_required
def markAddressed(survey_id):
    survey = Survey.query.get(survey_id)
    survey.addressed = True
    db.session.commit()
    return success_response(survey.serialize())


@app.route('/filter/')
@login_required
def filter_queries():
    body = json.loads(request.data)
    age = body.get("age", "")
    zipcode = body.get("zipcode", "")
    date1 = body.get("start_date", "") # take in string of format %Y-%m-%d
    date2 = body.get("end_date", "")
    joined = db.session.query(Survey).join(Question)
    age_filtered = joined.filter(Question.text=="age", Survey.answer_text==age) if len(age) != 0 else joined.all()
    age_ids = [age.response_id for age in age_filtered]
    zip_filtered = joined.filter(Question.text=="zipcode", Survey.answer_text==zipcode) if len(zipcode) != 0 else joined.all()
    zip_ids = [z.response_id for z in zip_filtered]
    date_filtered = db.session.query(Survey).filter(Survey.time_of_submit.between(date1, date2)) if len(date1) != 0 and len(date2) != 0 else joined.all()
    date_ids = [d.response_id for d in date_filtered]
    all_ids = age_ids + zip_ids + date_ids
    result = {i for i in all_ids if all_ids.count(i) == 3}
    return success_response(list(result))
    

def surveyJSON(response_id):
    json = {}
    with app.app_context():
        surveys = Survey.query.filter_by(response_id=response_id)
        questions = []
        answers = []
        for s in surveys:
            questions.append(s.question_id)
            answers.append(s.answer_text)
            time = s.time_of_submit.strftime("%d-%b-%Y (%H:%M:%S.%f)")
            addressed = s.addressed
        json = {
            "response_id": response_id,
            "questions": questions,
            "answers": answers,
            "time_stamp": time,
            "addressed" : addressed
        }
        #print(json)
    return json
    

def convertToCSV():
    with app.app_context():
        with sqlite3.connect("users.sqlite3") as connection:
            csvWriter = csv.writer(open("Survey.csv", "w"))
            records = Survey.query.all()
            for r in records:
                csvWriter.writerow([r.id, r.description, r.response_id
                , r.answer_text, r.question_id, r.time_of_submit, r.addressed])
            csvWriter = csv.writer(open("Question.csv", "w"))
            records = Question.query.all()
            for r in records:
                csvWriter.writerow([r.id, r.text, r.qtype, r.stype])


if __name__ == '__main__':
    convertToCSV()
    surveyJSON(2)
    app.run(host='0.0.0.0', port=105, debug=True)
    