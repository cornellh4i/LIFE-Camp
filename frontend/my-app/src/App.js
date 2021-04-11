import './App.css';
import { useState } from 'react';
import TextQ from './components/TextQ';
import Header from './components/Header';
import MultipleChoice from './components/MultipleChoice';
import Select from './components/Select';
import LargeTextQ from './components/LargeTextQ';
import lifeCampLogo from '../src/lifeCampLogo.png';
import RadioButton from './components/RadioButton';
import Multichoice from './components/Multichoice';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [age, setAge] = useState(0);
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

  function handlePhoneChange(event) {
    setShowOutput(false);
    setPhone(event.target.value);
  }

  function handleZipcodeChange(event) {
    setShowOutput(false);
    setZipcode(event.target.value);
  }

  function handleNumChildrenChange(event) {
    setShowOutput(false);
    setNumChildren(event.target.value);
  }

  function handleAgeChange(event) {
    setShowOutput(false);
    setAge(event.target.value);
  }

  function handleGender(event) {
    setShowOutput(false);
    setGender(event.target.value);
  }

  function handleRequestTypeChange(event) {
    setShowOutput(false);
    setRequestType(event.target.value);
  }

  function handleRequestChange(event) {
    setShowOutput(false);
    setRequest(event.target.value);
  }
  function handleEmergency(event) {
    setShowOutput(false);
    setEmergency(event.target.value);
  }

  const MultipleChoiceList = ["Male", "Female", "Other"];
  const ageList = Array.from({ length: 90 }, (_, index) => index + 10)
  // const ageList = Array(90).fill(10).map(Number.call, Number);


  return (
    <div className="App">
      <img className="lifeCampLogo" src={lifeCampLogo} />
      <p className="text">Fill out this form to make a request to LIFE Camp!</p>
      <div>
        <Header title="Personal Information" />
      </div>
      <form>
        <div><TextQ name="name" label="Name:" handleChange={handleNameChange} /></div>
        <div><TextQ name="phone" label="Phone Number" handleChange={handlePhoneChange} /></div>
        <div><TextQ name="email" label="Email address" handleChange={handleEmailChange} /></div>
        <div><TextQ name="zipcode" label="Zipcode" handleChange={handleZipcodeChange} /></div>
        <div><Select label="Age Range" handleChange={handleAgeChange} values={ageList} /></div>
        <div><Multichoice name="gender" label="Gender" values={MultipleChoiceList} handleChange={handleGender} /> </div>
        <Header title="Family Information" />
        <div><TextQ name="children" label="How many children are in your household?" handleChange={handleNumChildrenChange} /></div>
        <Header title="Requests" />
        <div><Select label="Type of Request" handleChange={handleRequestTypeChange} values={["Aid", "Talk"]} /></div>
        {/* <div><TextQ name="requestType" label="Type of Request" handleChange={handleRequestTypeChange} /></div> */}
        <div><LargeTextQ name="request" label="Request" handleChange={handleRequestChange} placeholder="Describe the situation + what you need?" /> </div>
        {/* <p className="inputLabel">Is this an Emergency?</p>
        <div className="yesNo">
          <RadioButton value="Yes" label="Yes" selectedOption={emergency} onValueChange={() => setEmergency("Yes")} />
          <p></p>
          <RadioButton value="No" label="No" selectedOption={emergency} onValueChange={() => setEmergency("No")} />
        </div> */}
        <div><Multichoice name="emergency" label="Is this an Emergency?" values={["Yes", "No"]} handleChange={handleEmergency} /> </div>


      </form>
      <button style={styles.submit} onClick={handleSubmit}>Submit</button>

      {showOutput ?
        <div>
          <p>Name: {name} </p>
          <p>Phone: {phone} </p>
          <p>Email: {email} </p>
          <p>Zipcode: {zipcode} </p>
          <p>Age: {age} </p>
          <p>Gender: {gender} </p>

          <p>Number of Children: {numChildren} </p>
          <p>Request Type: {requestType} </p>
          <p>Request: {request} </p>
          <p>Emergency: {emergency} </p>


        </div>
        :
        <></>
      }
    </div>
  );
}

const styles = {
  submit: {
    marginLeft: 5,
    justifyContent: "space-between",
    color: "black",
    fontSize: 15,
    width: "35%",
    height: "35px",
    display: "inline",
    backgroundColor: '#FFAD93',
    alignItems: "right",
    lineHeight: "20px",
    borderRadius: "5px",
    border: "none",
    paddingLeft: "10px",
    marginTop: 50,
    marginBottom: 30
  }

}
export default App;