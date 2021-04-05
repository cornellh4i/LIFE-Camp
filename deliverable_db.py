from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask import render_template
import json
from itertools import chain

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'

db = SQLAlchemy(app)


# generalized response formats
def success_response(data, code=200):
    return json.dumps({"success": True, "data": data}), code


def failure_response(message, code=404):
    return json.dumps({"success": False, "error": message}), code


# surveyq_table = db.Table("survey_question", db.Model.metadata,
#     db.Column("survey_id", db.Integer, db.ForeignKey("survey.s_id")),
#     db.Column("q_id", db.Integer, db.ForeignKey("questions.q_id"))
#     )

# user_survey = db.Table("user_survey", db.Model.metadata,
#     db.Column("user_id", db.Integer, db.ForeignKey("user.user_id")),
#     db.Column("survey_id", db.Integer, db.ForeignKey("survey.s_id"))
# )


class User(db.Model):
    __tablename__ = "user"
    id = db.Column('user_id', db.Integer, primary_key=True)
    name = db.Column('name', db.String(100))
    age = db.Column('age', db.Integer)
    occupation = db.Column('occupation', db.String(50))
    location = db.Column('location', db.String(100))
    needs = db.Column('needs', db.String(500))

    # surveys = db.relationship("Survey", secondary=user_survey, back_populates="survey")

    def __init__(self, **kwargs):
        self.name = kwargs.get("name")
        self.age = kwargs.get("age")
        self.occupation = kwargs.get("occupation")
        self.location = kwargs.get("location")
        self.needs = kwargs.get("needs")

    def serialize(self):
        return {
            "name": self.name,
            "age": self.age,
            "occupation": self.occupation,
            "location": self.location,
            "needs": self.needs
        }


class Questions(db.Model):
    __tablename__ = "questions"
    id = db.Column('q_id', db.Integer, primary_key=True)
    text = db.Column('text', db.String(100))
    qtype = db.Column('q_type', db.String(50))
    stype = db.Column('survey_type', db.String(50))

    surveys = db.relationship("Survey")

    def __init__(self, **kwargs):
        self.text = kwargs.get("text")
        self.qtype = kwargs.get("qtype")
        self.stype = kwargs.get("stype")

    def serialize(self):
        return {
            "text": self.text,
            "q_type": self.qtype,
            "survey_type": self.stype
        }


class Survey(db.Model):
    __tablename__ = "survey"
    id = db.Column("s_id", db.Integer, primary_key=True)
    # users = db.relationship("User", secondary=user_survey, back_populates="user")
    response_id = db.Column("response_id", db.String(50))
    description = db.Column("description", db.String(100))
    answer_text = db.Column("answer_text", db.String(100))
    question_id = db.Column(db.Integer, foreign_key="questions.id")

    # questions = db.relationship("Questions", secondary=surveyq_table, back_populates='questions')

    def __init__(self, **kwargs):
        self.response_id = kwargs.get("response_id")
        self.description = kwargs.get("description")
        self.answer_text = kwargs.get("answer_text")

    def serialize(self):
        return {
            "description": self.description,
            "response_id": self.response_id
        }

    def json_form(self):
        form = {
            "response_id": self.response_id,
            self.question_id: self.answer_text
        }
        return json.dumps(form)

@app.route('/user/<search_name>/')
def get_user(search_name):
    user = User.query.filter_by(name=search_name).first()
    return success_response(user.serialize())


@app.route('/location/')
def all_locations():
    result = [loc.serialize() for loc in User.query.with_entities(User.location).all()]
    return success_response(result)


@app.route('/needs/')
def all_needs():
    result = [need.serialize() for need in User.query.with_entities(User.needs).all()]
    return success_response(result)


@app.route('/questions/')
def all_questions():
    result = [q.serialize() for q in Questions.query.all()]
    return success_response(result)


@app.route('/questions/', methods=["POST"])
def add_question():
    body = json.loads(request.data)
    new_q = Questions(text=body.get("text"), qtype=body.get("q_type"), stype=body.get("survey_type"))
    db.session.add(new_q)
    db.session.commit()
    return success_response(new_q.serialize(), 201)


if __name__ == '__main__':
    db.create_all()
    # new_example = User("Jack", 24, "Chef", "New York", "Needs")
    # db.session.add(new_example)
    # db.session.commit()

    app.run(host='0.0.0.0', port=105, debug=True)
