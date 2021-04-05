import './App.css';
import { useState } from 'react';
import TextQ from './components/TextQ';
import Header from './components/Header';
import MultipleChoice from './components/MultipleChoice';
import Select from './components/Select';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone]  = useState("");
  const [zipcode, setZipcode]  = useState("");
  const [age, setAge]  = useState("");
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
  
  function handlePhoneChange(event){
    setShowOutput(false);
    setPhone(event.target.value);
  }

  function handleZipcodeChange(event){
    setShowOutput(false);
    setZipcode(event.target.value);
  }

  function handleNumChildrenChange(event){
    setShowOutput(false);
    setZipcode(event.target.value);
  }

  function handleAgeChange(event){
    setShowOutput(false);
    setAge(event.target.value);
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
        <div><TextQ name="phone" label="Phone Number" handleChange={handlePhoneChange} /></div>
        ​<div><TextQ name="email" label="Email address" handleChange={handleEmailChange} /></div>
        <div><TextQ name="zipcode" label="Zipcode" handleChange={handleZipcodeChange} /></div>
        <div><Select label="Age Range" handleChange={handleAgeChange}/></div>
        {/* <div>
          <label>Gender</label>
          <MultipleChoice values={MultipleChoiceList} handleChange={event => setGender(event)} />
        </div> */}
        <Header title="Family Information" />
        <div><TextQ name="children" label="How many children are in your household?" handleChange={handleNumChildrenChange} /></div>
        <Header title="Requests" />
        <div><TextQ name="request" label="Type of Request" handleChange={handleNumChildrenChange} /></div>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      
​
      {showOutput ?
        <div>
          <p>Name: {name} </p>
          <p>Phone: {phone} </p>
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