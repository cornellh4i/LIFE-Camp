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
import Graph from './components/Graph';
import Filter from './components/Filter';
import ActiveFilters from './components/ActiveFilters';

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

  const [showSurvey, setShowSurvey] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleScreenChange(event) {
    setShowSurvey(!showSurvey);
    event.preventDefault();
  }

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
  const requestsList = ["Therapeutic Services", "Health Services", "Legal Aid", "Assistance for Youth", "COVID Support (eg. PPE Supplies)", "Transit", "Food", "Housing Support", "Access to Education", "Domestic Violence Support", "Other"];
  return (
    showSurvey ?
      <div className="App">
        <div>
          <button style={styles.submit} onClick={handleScreenChange}> Go to Graph </button>
          <img className="lifeCampLogo" src={lifeCampLogo} />
          <p className="text">Fill out this form to make a request to LIFE Camp!</p>
        </div>
        <div>
          <Header title="PERSONAL INFORMATION" />
        </div>
        <form>
          <div><TextQ name="name" label="Name:" handleChange={handleNameChange} /></div>
          <div><TextQ name="phone" label="Phone Number" handleChange={handlePhoneChange} /></div>
          <div><TextQ name="email" label="Email address" handleChange={handleEmailChange} /></div>
          <div><TextQ name="zipcode" label="Zipcode" handleChange={handleZipcodeChange} /></div>
          <div><Select label="Age Range" handleChange={handleAgeChange} values={ageList} /></div>
          <div><Multichoice name="gender" label="Gender" values={MultipleChoiceList} handleChange={handleGender} /> </div>
          <Header title="FAMILY INFORMATION" />
          <div><Select label="How many children are in your household?" handleChange={handleNumChildrenChange} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
          <Header title="REQUESTS" />
          <div><Select label="Type of Request" handleChange={handleRequestTypeChange} values={requestsList} /></div>
          <div><LargeTextQ name="request" label="Request" handleChange={handleRequestChange} placeholder="Describe the situation + what you need?" /> </div>
          <div><Multichoice name="emergency" label="Is this an Emergency?" values={["Yes", "No"]} handleChange={handleEmergency} /> </div>


        </form>
        <button style={styles.submit} onClick={handleSubmit}>SUBMIT</button>

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
      :
      <div>
        <button style={styles.submit} onClick={handleScreenChange}> Go to Survey </button>
        <Graph />
        <Filter selectedFilters={selectedFilters} addFilter={setSelectedFilters} label="Filter Type of Request" handleChange={handleRequestTypeChange} values={["Filter Type of Request", "Age Range", "Zipcode", "Time Period"]} />
        <Filter selectedFilters={selectedFilters} addFilter={setSelectedFilters} label="Choose Specific" handleChange={handleRequestTypeChange} values={["Choose Specific"]} />
        {/* {selectedFilters.map((val, i) => <p>{val}</p> )} */}
        <ActiveFilters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      </div>
  );
}

const styles = {
  submit: {
    justifyContent: "flex-end",
    color: "#F08633",
    fontSize: 15,
    width: "10%",
    height: "35px",
    display: "inline",
    backgroundColor: 'white',
    lineHeight: "20px",
    borderColor: "#F08633",
    borderWidth: 1,
    paddingLeft: "10px",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: "80%"
  },
}
export default App;
