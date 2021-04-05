import './App.css';
import { useState } from 'react';
import TextQ from './components/TextQ';
import Header from './components/Header';
import MultipleChoice from './components/MultipleChoice';
import Select from './components/Select';
import LargeTextQ from './components/LargeTextQ';
import lifeCampLogo from '../src/lifeCampLogo.png';
import RadioButton from './components/RadioButton';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone]  = useState("");
  const [zipcode, setZipcode]  = useState("");
  const [age, setAge]  = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [requestType, setRequestType] = useState(""); 
  const [request, setRequest] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [emergency, setEmergency] = useState("");

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
    setNumChildren(event.target.value);
  }

  function handleAgeChange(event){
    setShowOutput(false);
    setAge(event.target.value);
  }

  function handleRequestTypeChange(event){
    setShowOutput(false);
    setRequestType(event.target.value);
  }

  function handleRequestChange(event){
    setShowOutput(false);
    setRequest(event.target.value);
  }


  const MultipleChoiceList = ["Male", "Female", "Other"]
  return (
    <div className="App">
      <img className="lifeCampLogo" src={lifeCampLogo}/>
      <p className="text">Fill out this form to make a request to LIFE Camp!</p>
      <div>
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
        <div><TextQ name="requestType" label="Type of Request" handleChange={handleRequestTypeChange} /></div>
        <div><LargeTextQ name="request" label="Request" handleChange={handleRequestChange} placeholder="Describe the situation + what you need?"/> </div>
       <p className="inputLabel">Is this an Emergency?</p>
        <div className="yesNo">
          <RadioButton value="Yes" label="Yes" selectedOption={emergency} onValueChange={()=>setEmergency("Yes")}/>
          <p></p>
          <RadioButton value="No" label="No" selectedOption={emergency} onValueChange={()=>setEmergency("No")}/>
        </div>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      
      {showOutput ?
        <div>
          <p>Name: {name} </p>
          <p>Phone: {phone} </p>
          <p>Email: {email} </p>
          <p>Zipcode: {zipcode} </p>
          <p>Age: {age} </p>
          <p>Number of Children: {numChildren} </p>
          <p>Request Type: {requestType} </p>
          <p>Request: {request} </p>

        </div>
        :
        <></>
      }
    </div>
  );
}
export default App;