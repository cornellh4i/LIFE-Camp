from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import render_template
from itertools import chain

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column('user_id', db.Integer, primary_key=True)
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


@app.route('/user/<search_name>/')
def get_user(search_name):
    user = User.query.filter_by(name=search_name).first()
    return str({'id': user.id, 'user': user.name, 'age': user.age, 'occupation': user.occupation,
            'location': user.location, 'needs': user.needs})


# return render_template('show_user.html', user=user)

@app.route('/location/')
def all_locations():
    # return render_template('show_all.html', students = students.query.all() )
    result = User.query.with_entities(User.location).all()
    result = tuple(chain(*result))
    # print(result)
    return str(result)


@app.route('/needs/')
def all_needs():
    result = User.query.with_entities(User.needs).all()
    result = tuple(chain(*result))
    return str(result)

    # user_needs = session.query(User.needs)
    # all_needs = user_needs.all()


if __name__ == '__main__':
    db.create_all()
    # new_example = User("Jack", 24, "Chef", "New York", "Needs")
    # db.session.add(new_example)
    # db.session.commit()

    app.run(host='0.0.0.0', port=105, debug=True)

# Queries: GET a certain row by name, GET all locations, GET all needs
# Create a dummy database with Flask-SQLAlchemy with a few columns, working queries, and an API document.