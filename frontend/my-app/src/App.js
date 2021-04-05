import './App.css';
import { useState } from 'react';
import TextQ from './components/TextQ';
import Header from './components/Header';
import MultipleChoice from './components/MultipleChoice';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  function handleSubmit(event) {
    console.log(name, email, gender)
    setShowOutput(true);
    event.preventDefault();
  }

  function handleNameChange(event) {
    setShowOutput(false);
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setShowOutput(false);
    setEmail(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event)
  }

  const MultipleChoiceList = ["Male", "Female", "Other"]
  return (
    <div className="App">
      <div >
        <Header title="Personal Information" />
      </div>
      <form>
        <div><TextQ name="name" label="Name:" handleChange={handleNameChange} /></div>
        <div>
          <TextQ name="email" label="Email" handleChange={handleEmailChange} />
        </div>
​
        <div>
          <label>Gender</label>
          <MultipleChoice values={MultipleChoiceList} handleChange={event => setGender(event)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
​
      {showOutput ?
        <div>
          <p>Name: {name} </p>
          <p>Email: {email} </p>
          <p>Gender: {gender} </p>
        </div>
        :
        <></>
      }
    </div>
  );
}
export default App;