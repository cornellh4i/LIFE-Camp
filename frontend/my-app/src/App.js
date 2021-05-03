import './App.css';
import { useState } from 'react';
import TextQ from './components/TextQ';
import Header from './components/Header';
import GraphHeader from './components/GraphHeader';
import MultipleChoice from './components/MultipleChoice';
import Select from './components/Select';
import LargeTextQ from './components/LargeTextQ';
import lifeCampLogo from '../src/lifeCampLogo.png';
import Multichoice from './components/Multichoice';
import Graph from './components/Graph';
import RequestCard from './components/RequestCard';
import Filter from './components/Filter';
import ActiveFilters from './components/ActiveFilters';
import FilterSideBar from './components/FilterSideBar';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [age, setAge] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [numSeniors, setNumSeniors] = useState(0);
  const [requestType, setRequestType] = useState("");
  const [request, setRequest] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [emergency, setEmergency] = useState("");
  const [showSurvey, setShowSurvey] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filterRequestType, setFilterRequestType] = useState("");
  const [specificFilter, setSpecificFilter] = useState("");
  const MultipleChoiceList = ["Male", "Female", "Other"];
  const ageList = ["0 - 10", "11 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 90", "91 - 100"]
  // Array.from({ length: 90 }, (_, index) => index + 10)
  const zipCodeList = ["11411", "11412", "11413", "11423", "11429/11428", "11434", "11435/11436"]
  const neighborhoodList = ["Cambria Heights", "Saint Alban", "Spring Albans", "Springfield Garden", "Saint Albans", "Hollis", "Queens Village", "Rochdale Village", "Jamaica"]
  const genderList = ["Male", "Female", "Other"]

  const requestsList = ["Therapeutic Wellness Services", "Emergency Support", "Youth Leadership / Development / Mentorship", "Housing", "Education", "Transportation", "Workforce Development", "Financial Literacy"];
  // const [filterRequestType, setFilterRequestType] = useState(""); 
  // const [specificFilter, setSpecificFilter] = useState(""); 
  const [trends, setTrends] = useState(true);

  function handleScreenChange(event) {
    setShowSurvey(!showSurvey);
    event.preventDefault();
  }

  function handleSubmit(event) {
    // console.log(name, email, gender)
    setShowOutput(true);
    event.preventDefault();
  }

  function handleSave(event) {
    console.log("");

  }

  function handleChange(event, setFunction) {
    setShowOutput(false);
    setFunction(event.target.value);
  }

  return (
    showSurvey ?
      <div className="App">
        <div style={styles.header}>
          <div style={{ display: "flex" }}>
            <img className="lifeCampLogo" src={lifeCampLogo} />
            <button style={styles.submit} onClick={handleScreenChange}> Go to Graph </button>

          </div>
          <h1>MAKE A REQUEST</h1>
          <p className="text">Fill out this form to make a request to LIFE Camp!</p>
        </div>
        <div>
          <Header title="PERSONAL INFORMATION" />
        </div>
        <form>
          <div><TextQ name="name" label="Name:" handleChange={e => handleChange(e, setName)} /></div>
          <div><TextQ name="phone" label="Phone Number" handleChange={e => handleChange(e, setPhone)} /></div>
          <div><TextQ name="email" label="Email address" handleChange={e => handleChange(e, setEmail)} /></div>
          <div style={styles.first}><Select label="Zipcode" handleChange={e => handleChange(e, setZipcode)} values={zipCodeList} /></div>
          <div style={styles.second}><Select label="Neighborhood" handleChange={e => handleChange(e, setZipcode)} values={neighborhoodList} /></div>
          <div style={{ float: "left", width: "100%" }}> </div>
          <div style={styles.first}> <Select label="Age Range" handleChange={e => handleChange(e, setAge)} values={ageList} /></div>
          <div style={styles.second}> <Select label="Gender" handleChange={e => handleChange(e, setGender)} values={genderList} /></div>
          {/* <div><Multichoice name="gender" label="Gender" values={MultipleChoiceList} handleChange={e => handleChange(e, setGender)} /> </div> */}
          <Header title="FAMILY INFORMATION" />
          <div style={{ width: "70%", marginLeft: "1%" }} > <Select label="How many people are in your household (excluding yourself)?" handleChange={e => handleChange(e, setNumPeople)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
          <div style={styles.first}><Select label="How many children?" handleChange={e => handleChange(e, setNumChildren)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
          <div style={styles.second}> <Select label="How many seniors?" handleChange={e => handleChange(e, setNumSeniors)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
          <Header title="REQUESTS" />
          <div style={{ width: "50%", marginLeft: "2.5%" }}><Select label="Type of Request" handleChange={e => handleChange(e, setRequestType)} values={requestsList} /></div>
          <div><LargeTextQ name="request" label="Request" handleChange={e => handleChange(e, setRequest)} placeholder="Describe the situation + what you need?" /> </div>
          <div><Multichoice name="emergency" label="Is this an Emergency?" values={["Yes", "No"]} handleChange={e => handleChange(e, setEmergency)} /></div>
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
            <p>Number of People: {numPeople} </p>
            <p>Number of Children: {numChildren} </p>
            <p>Number of Seniors: {numSeniors} </p>
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
        <div>
          <GraphHeader title1="TRENDS" title2="REQUESTS" trends={trends} setTrends={setTrends} />
        </div>
        <button style={styles.submit} onClick={handleScreenChange}> Go to Survey </button>
        {/* <Graph />
        <Select label="Filter Type of Request" handleChange={e => handleChange(e, setFilterRequestType)} values={["Age Range", "Zipcode", "Time Period"]} />
        {
          filterRequestType === "Age Range" ?
            <Select label="Choose Specific" handleChange={e => handleChange(e, setSpecificFilter)} values={["0-18", "18-60", "60+"]} />
            :
            filterRequestType === "Zipcode" ?
              <Select label="Choose Specific" handleChange={e => handleChange(e, setSpecificFilter)} values={["12345", "235345", "32431"]} />
              :
              <Select label="Choose Specific" handleChange={e => handleChange(e, setSpecificFilter)} values={["Time Period 1", "Time Period 2", "Time Period 3"]} />
        } */}
        {/* <RequestCard
          name="John Penridge"
          phone="215-512-1402"
          email="example@gmail.com"
          requestTag="Food"
          emergency={true}
          requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
          handleChange={console.log("complete")}
        /> */}


        {trends ?
          <div style={styles.trends}>
            <FilterSideBar handleChange={handleChange} setFilterRequestType={setFilterRequestType} zipcodeList={zipCodeList} neighborhoodList={neighborhoodList} requestsList={requestsList} />

            {/* <p>{settings}</p> */}
            <div>
              <Graph />
            </div>

            {/* {
              filterRequestType === "Age Range" ? 
                <Select request={true} label="Choose Specific" handleChange={e => handleChange (e, setSpecificFilter)} values={["0-18", "18-60", "60+"]}/>
                :
                  filterRequestType === "Zipcode" ? 
                    <Select request={true} label="Choose Specific" handleChange={e => handleChange (e, setSpecificFilter)} values={["12345", "235345", "32431"]}/>
                  :
                    <Select request={true} label="Choose Specific" handleChange={e => handleChange (e, setSpecificFilter)} values={["Time Period 1", "Time Period 2", "Time Period 3"]}/>
            } */}
          </div>
          :
          <div style={styles.trends}>
            <FilterSideBar handleChange={handleChange} setFilterRequestType={setFilterRequestType} zipcodeList={zipCodeList} neighborhoodList={neighborhoodList} requestsList={requestsList} />

            {/* <p>{settings}</p> */}



            <RequestCard
              name="John Penridge"
              phone="215-512-1402"
              email="example@gmail.com"
              requestTag="Food"
              emergency={true}
              requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
              handleChange={console.log("complete")}
            />
          </div>
        }
        {/* <Filter selectedFilters={selectedFilters} addFilter={setSelectedFilters} label="Choose Specific" handleChange={handleRequestTypeChange} values={[]} /> */}
        {/* {selectedFilters.map((val, i) => <p>{val}</p> )} */}
        {/* <ActiveFilters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} /> */}
      </div>


  );
}

const styles = {
  first: { float: "left", width: "25%", marginLeft: "3.5%" },
  header: {
    backgroundColor: "#F08633",
    color: "white",
    paddingBottom: 20
  },
  second: { float: "left", width: "25%", },
  selected: {
    width: "25%",
    marginLeft: "3.5%"
  },
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
    marginLeft: "70%",
  },
}
export default App;
