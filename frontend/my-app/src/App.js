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
import TrendFilters from './components/TrendFilters'
import Filter from './components/Filter';
import ActiveFilters from './components/ActiveFilters';
import FilterSideBar from './components/FilterSideBar';
import Login from './components/Login';
import RequestCards from './components/RequestCard'

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [age, setAge] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [numSeniors, setNumSeniors] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [requestType, setRequestType] = useState("");
  const [request, setRequest] = useState("");
  const [emergency, setEmergency] = useState("");
  const [showSurvey, setShowSurvey] = useState(true);
  const [trendsFilters, setTrendsFilters] = useState([]);
  const [userState, setUserState] = useState("");
  const [selectedFilters, setSelectedFilters] = useState(["All", "All", "All", "All", "All"]);
  const [filterRequestType, setFilterRequestType] = useState("");
  const [specificFilter, setSpecificFilter] = useState("");
  const [requestList, setRequestList] = useState([]);
  const MultipleChoiceList = ["Male", "Female", "Other"];
  const ageList = ["0 - 10", "11 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 90", "91 - 100"]
  // Array.from({ length: 90 }, (_, index) => index + 10)
  const zipCodeList = ["All", "11411", "11412", "11413", "11423", "11429/11428", "11434", "11435/11436"]
  const neighborhoodList = ["All", "Cambria Heights", "Saint Alban", "Spring Albans", "Springfield Garden", "Saint Albans", "Hollis", "Queens Village", "Rochdale Village", "Jamaica"]
  const genderList = ["Male", "Female", "Other "];


  const requestsList = ["All", "Therapeutic Wellness Services", "Mental/Emotional Health Counseling", "Physical/Medical Health Referral", "Nutrition/Food Support", "COVID-related support(PPE, Health Services, etc.)",
    "Emergency Support", "Safety transfer/mediation support", "Domestic Violence", "Emergency Funds", "Legal Aid Services", "Police", "Community Relations", "Other", "Youth Leadership/Development/Mentorship", "Housing", "Education", "Transportation", "Workforce Development", "Financial Literacy"];
  // const [filterRequestType, setFilterRequestType] = useState(""); 
  // const [specificFilter, setSpecificFilter] = useState(""); 
  const [trends, setTrends] = useState(true);

  function handleScreenChange(event) {
    setShowSurvey(!showSurvey);
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    var fields = [name, phone, email, zipcode, neighbourhood, age, gender, numPeople, numChildren, numSeniors, requestType, request, emergency]
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] == "") {
        alert("Please fill in all fields before submitting!");
        return;
      }
    }
    var responseObjs = [
      {
        description: "name",
        answer_text: name,
        question_id: 1
      },
      {
        description: "phone number",
        answer_text: phone,
        question_id: 2
      },
      {
        description: "email",
        answer_text: email,
        question_id: 3
      },
      {
        description: "Zipcode",
        answer_text: zipcode,
        question_id: 4
      },
      {
        description: "neighbourhood",
        answer_text: neighbourhood,
        question_id: 5
      },
      {
        description: "age range",
        answer_text: age,
        question_id: 6
      },
      {
        description: "gender",
        answer_text: gender,
        question_id: 7
      },
      {
        description: "family members",
        answer_text: numPeople,
        question_id: 8
      },
      {
        description: "number of children",
        answer_text: numChildren,
        question_id: 9
      },
      {
        description: "number of seniors",
        answer_text: numSeniors,
        question_id: 10
      },
      {
        description: "request type",
        answer_text: requestType,
        question_id: 11
      },
      {
        description: "request detail",
        answer_text: request,
        question_id: 12
      },
      {
        description: "emergency?",
        answer_text: emergency,
        question_id: 13
      }
    ]
    var responseList = responseObjs.map(JSON.stringify);
    console.log(responseList);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ responses: responseObjs }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': "Bearer" + "\xa0" + `${localStorage.getItem("acc_tok")}`
      }
    }
    fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/survey/', requestOptions, { mode: 'cors' })
      .then(function (response) {
        console.log(response.json());
      })
      .catch((error) => {
        console.error('Error:', error);
      });;
  }

  function onSaveTrendFilters(filters) {
    setTrendsFilters(filters);

  }

  function handleChange(event, setFunction) {
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
            <div style={styles.second}><Select label="Neighborhood" handleChange={e => handleChange(e, setNeighbourhood)} values={neighborhoodList} /></div>
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


        </div>
        :

        <div>
          <div>
            <GraphHeader title1="TRENDS" title2="REQUESTS" trends={trends} setTrends={setTrends} setRequestList={setRequestList} />
          </div>
          <button className="button" style={styles.submit} onClick={handleScreenChange}> Go to Survey </button>


          {trends ?
            <div style={styles.trends}>
              <TrendFilters handleChange={handleChange} zipcodeList={zipCodeList} ageList={ageList} onSaveTrendFilters={onSaveTrendFilters} />

              <div>
                <Graph trendsFilters={trendsFilters} />
              </div>

            </div>
            :
            <div style={styles.requests}>
              <FilterSideBar handleChange={handleChange} setFilterRequestType={setFilterRequestType} zipcodeList={zipCodeList} neighborhoodList={neighborhoodList} requestsList={requestsList} setSelectedFilters={setSelectedFilters} />

              <div style={styles.requestCards}>

                <RequestCards setRequestList={setRequestList} filterList={selectedFilters} />

              </div>
            </div>
          }

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
  }
}
export default App;
