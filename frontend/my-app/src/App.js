import './App.css';
import './index.css';
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
import Login from './components/Login';

function App() {
  const [showLogin, setShowLogin] = useState(true);
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
  const genderList = ["Male", "Female", "Other "]

  const requestsList = ["Therapeutic Wellness Services", "Mental / Emotional Health Counseling", "Physical / Medical Health Referral", "Nutrition / Food Support", "COVID-related support (PPE, Health Services, etc.)",
    "Emergency Support", "Safety transfer / mediation support", "Domestic Violence", "Emergency Funds", "Legal Aid Services", "Police", "Community Relations", "Other", "Youth Leadership / Development / Mentorship", "Housing", "Education", "Transportation", "Workforce Development", "Financial Literacy"];
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
    showLogin ?
      <Login handler={setShowLogin} />
      :
      showSurvey ?
        <div className="App">
          <div style={styles.header}>
            <div style={{ display: "flex" }}>
              <img className="lifeCampLogo" src={lifeCampLogo} />
              <button className="button" style={styles.submit} onClick={handleScreenChange}> Go to Graph </button>

            </div>
            <h1>MAKE A REQUEST</h1>
            <h3 className="text">Fill out this form to make a request to LIFE Camp!</h3>
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
            <Header title="FAMILY INFORMATION" />
            <div style={{ width: "70%", marginLeft: "1%" }} > <Select label="How many people are in your household (excluding yourself)?" handleChange={e => handleChange(e, setNumPeople)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
            <div style={styles.first}><Select label="How many children?" handleChange={e => handleChange(e, setNumChildren)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
            <div style={styles.second}> <Select label="How many seniors?" handleChange={e => handleChange(e, setNumSeniors)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
            <Header title="REQUESTS" />
            <div style={{ width: "50%", marginLeft: "2.5%" }}><Select label="Type of Request" handleChange={e => handleChange(e, setRequestType)} values={requestsList} /></div>
            <div><LargeTextQ name="request" label="Request" handleChange={e => handleChange(e, setRequest)} placeholder="Describe the situation + what you need?" /> </div>
            <div><Multichoice name="emergency" label="Is this an Emergency?" values={["Yes", "No"]} handleChange={e => handleChange(e, setEmergency)} /></div>
          </form>
          <button className="button" style={styles.submit} onClick={handleSubmit}>SUBMIT</button>

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
          <button className="button" style={styles.submit} onClick={handleScreenChange}> Go to Survey </button>
          {/* <Graph /> */}
          {/* <Select label="Filter Type of Request" handleChange={e => handleChange(e, setFilterRequestType)} values={["Age Range", "Zipcode", "Time Period"]} />
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
            <div style={styles.requests}>
              <FilterSideBar handleChange={handleChange} setFilterRequestType={setFilterRequestType} zipcodeList={zipCodeList} neighborhoodList={neighborhoodList} requestsList={requestsList} />

              {/* https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/responses/ */}
              {/* {
                fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/responses/')
                  .then(response => response.json())
                  .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    data = jsonData.data
                    for (var question in data) {
                      <RequestCard
                        name="John Penridge"
                        phone="215-512-1402"
                        email="example@gmail.com"
                        requestTag="Food"
                        emergency={true}
                        requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
                        handleChange={console.log("complete")}
                      />

                    }
                    console.log(jsonData)
                  })
                  .catch((error) => {
                    // handle your errors here
                    console.error(error)
                  })
              } */}

              {/* EXAMPLE
              
              {"success": true, "data": [{"id": 1, "description": "Types of Request", "response_id": "1", "answer_text": "Nutrition /
Food Support", "question_id": 10, "time_of_submit": "17-May-2021 (00:29:34.912485)", "addressed": false}, {"id": 2,
"description": "Types of Request", "response_id": "2", "answer_text": "Police", "question_id": 10, "time_of_submit":
"17-May-2021 (00:45:57.919928)", "addressed": false}, {"id": 3, "description": "Types of Request", "response_id": "3",
"answer_text": "Police", "question_id": 10, "time_of_submit": "17-May-2021 (00:50:49.344661)", "addressed": false}]}
              
              */}

              {/* <p>{settings}</p> */}
              <div style={styles.requestCards}>

                <RequestCard
                  name="John Penridge"
                  phone="215-512-1402"
                  email="example@gmail.com"
                  requestTag="Food"
                  emergency={true}
                  requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
                  handleChange={console.log("complete")}
                />
                <RequestCard
                  name="John Penridge"
                  phone="215-512-1402"
                  email="example@gmail.com"
                  requestTag="Food"
                  emergency={true}
                  requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
                  handleChange={console.log("complete")}
                />
                <RequestCard
                  name="John Penridge"
                  phone="215-512-1402"
                  email="example@gmail.com"
                  requestTag="Food"
                  emergency={true}
                  requestText="I am requesting for some food services on the corner of 8th and 9th street on the first two Mondays of every month because (insert reason)"
                  handleChange={console.log("complete")}
                />
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
  requestCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexFlow: "row wrap ",
    justifyContent: "flex-start",
    alignContent: "space-between",
  },
  submit: {
    justifyContent: "flex-end",
    // color: "#F08633",
    fontSize: 15,
    width: "10%",
    height: "35px",
    display: "inline",
    lineHeight: "20px",
    borderColor: "#F08633",
    borderWidth: 1,
    paddingLeft: "10px",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: "70%",
  },
  requestCards: {
    display: "flex",
    flexFlow: "row wrap",

    // float: "left"
  }
}
export default App;
