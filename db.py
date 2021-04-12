from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db = SQLAlchemy()
 
class Question(db.Model):
    __tablename__ = "question"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    qtype = db.Column(db.String, nullable=False)
    stype = db.Column(db.String, nullable=False)
    surveys = db.relationship('Survey', backref='question')

    def __init__(self, **kwargs):
        self.text = kwargs.get("text")
        self.qtype = kwargs.get("qtype")
        self.stype = kwargs.get("stype")

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "qtype": self.qtype,
            "stype": self.stype
        }


class Survey(db.Model):
    __tablename__ = "survey"
    id = db.Column(db.Integer, primary_key=True)
    response_id = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    answer_text = db.Column(db.String, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey("question.id"), nullable=False)
    time_of_submit = db.Column(db.String)
    addressed = db.Column(db.Boolean, default=False)
    
    def __init__(self, **kwargs):
        self.response_id = kwargs.get("response_id")
        self.description = kwargs.get("description")
        self.answer_text = kwargs.get("answer_text")
        self.question_id = kwargs.get("question_id")
        dateTimeObj = datetime.now()
        timestampStr = dateTimeObj.strftime("%d-%b-%Y (%H:%M:%S.%f)")
        self.time_of_submit = timestampStr

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "response_id": self.response_id,
            "answer_text": self.answer_text,
            "time_of_submit": self.time_of_submit,
            "addressed": self.addressed
        }