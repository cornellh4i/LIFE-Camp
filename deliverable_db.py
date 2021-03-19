from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import render_template

app = Flask (__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'

db = SQLAlchemy(app)
class users(db.Model):
   id = db.Column('user_id', db.Integer, primary_key = True)
   name = db.Column('name', db.String(100))
   age = db.Column('age', db.Integer)  
   occupation = db.Column('occupation', db.String(50))
   location = db.Column('location', db.String(100))
   needs = db.Column('needs', db.String(500))

def __init__(self, name, age, occupation, location, needs):
   self.name = name
   self.age = age
   self.occupation = occupation
   self.location = location
   self.needs = needs

@app.route('/<string:name>/')
def get_user(search_name):
   user = user.query.filter_by(name = search_name).all()
   return {'user': user.name}
   return render_template('show_user.html', user=user)

@app.route('/location/')
def all_locations():
   return render_template('show_all.html', students = students.query.all() )

@app.route('/needs/')
def all_needs():

if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)
   
   #Queries: GET a certain row by name, GET all locations, GET all needs