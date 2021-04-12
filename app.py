from db import db 
from db import Question, Survey
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import json
from sqlalchemy import func

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


@app.route('/questions/')
def all_questions():
   result = [q.serialize() for q in Question.query.all()]
   return success_response(result)


@app.route('/questions/', methods=["POST"])
def add_question():
   body = json.loads(request.data)
   new_q = Question(text=body.get("text"), qtype=body.get("qtype"), stype=body.get("stype"))
   db.session.add(new_q)
   db.session.commit()
   return success_response(new_q.serialize(), 201)


@app.route('/responses/')
def all_responses():
   result = [r.serialize() for r in Survey.query.all()]
   return success_response(result)


@app.route('/responses/', methods=["POST"])
def add_response():
    body = json.loads(request.data)
    new_r = Survey(response_id=body.get("response_id"), description=body.get("description"), answer_text=body.get("answer_text"), stype=body.get("stype"), question_id=body.get("question_id"))
    db.session.add(new_r)
    db.session.commit()
    return success_response(new_r.serialize(), 201)


@app.route('/responses/ct/')
def get_cts():
    all_cts = db.session.query(Survey.answer_text, func.count(Survey.answer_text)).group_by(Survey.answer_text).all()
    return success_response(dict(all_cts))


@app.route('/addressed/<survey_id>/', methods=["POST"])
def markAddressed(survey_id):
    survey = Survey.query.get(survey_id)
    survey.addressed = True
    db.session.commit()
    return success_response(survey.serialize())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105, debug=True)