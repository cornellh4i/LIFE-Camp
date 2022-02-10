import Danger from './images/Danger.png';
import Phone from './images/Phone.png';
import Message from './images/Message.png';
import { useState } from 'react';


var React = require('react');
var Component = React.Component;

class RequestCards extends Component {
  constructor(props) {
    super(props);
    this.state =
      { surveys: [] }
  }

  render() {
    var filters = this.props.filterList;
    var requests = this.state.surveys;
    const zipcode = filters[0];
    const neighbourhood = filters[1];
    const completed = filters[2] === "Yes";
    const requestType = filters[3];
    const isEmergency = filters[4];
    var zipcodeFiltered = requests.filter(r => (zipcode == "All" || zipcode == "" || r.answers[3] == zipcode));
    var neighbourhoodFiltered = zipcodeFiltered.filter(r => (neighbourhood == "All" || neighbourhood == "" || r.answers[4] == neighbourhood));
    var completedFiltered = neighbourhoodFiltered.filter(r => (completed == "All" || completed == "" || r.addressed == completed));
    var requestTypeFiltered = completedFiltered.filter(r => requestType == "All" || requestType == "" || r.answers[10] == requestType);
    var filteredRequest = requestTypeFiltered.filter(r => isEmergency == "All" || isEmergency == "" || r.answers[12] == isEmergency);
    var cards = []
    for (var i = 0; i < filteredRequest.length; i++) {
      var req = filteredRequest[i];
      var ans = req.answers
      var emergency = ans[12] == "Yes"
      var ele = <RequestCard
        name={ans[0]}
        phone={ans[1]}
        email={ans[2]}
        requestTag={ans[10]}
        emergency={emergency}
        requestText={ans[11]}
      />
      cards.push(ele)
    }

    return cards
  }

  componentDidMount() {
    var that = this;

    fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/responses/')
      .then(response => response.json())
      .then((jsonData) => {
        var data = jsonData.data
        console.log(data)
        return data
      }).then(data => {
        that.setState({ surveys: data });
        that.setState({ filteredSurveys: data })
      }
      )
      .catch((error) => {
        console.error(error)
      })

  }

}

const RequestCard = props => {

  const [moreInfo, setMoreInfo] = useState(false);

  function handleClick(event, type) {
    // console.log(name, email, gender)
    if (type === 'more') {
      setMoreInfo(true);
    }
    else {
      setMoreInfo(false);
    }


    event.preventDefault();
  }

  return (
    moreInfo ?
      <div style={styles.cardContainerLong}>
        <div>
          <label > {props.name} </label>
          <p style={{ display: "inline", marginLeft: "28%" }}>Complete?</p><input type="checkbox" name="Complete?" onChange={props.handleChange} />
        </div>
        <div>
          <img style={{ display: "inline" }} src={Phone} />
          <label style={styles.phoneEmail}> {props.phone} </label>
        </div>
        <img src={Message} />
        <label style={styles.phoneEmail}>  {props.email} </label>
        <p>"{props.requestText}"</p>
        <div style={{ display: "inline" }}>
          {props.emergency ?
            <div style={styles.emergencyContainer}>
              <img style={{ display: "inline" }} src={Danger} />
              <label style={{ fontSize: "5 px" }}>Emergency</label>
            </div>
            :
            <></>
          }
          <label style={{ display: "inline" }}>{props.requestTag}</label>
          <button onClick={e => handleClick(e, "less")} style={styles.moreInfo}>less info -</button>
        </div>
      </div>

      :

      <div style={styles.cardContainer}>
        <div>
          <label > {props.name} </label>
          <p style={{ display: "inline", marginLeft: "28%" }}>Complete?</p><input type="checkbox" name="Complete?" onChange={props.handleChange} />
        </div>
        <div>
          <img style={{ display: "inline" }} src={Phone} />
          <label style={styles.phoneEmail}> {props.phone} </label>
        </div>
        <img src={Message} />
        <label style={styles.phoneEmail}>  {props.email} </label>
        <p>"{props.requestText}"</p>
        <div style={{ display: "inline" }}>
          {props.emergency ?
            <div style={styles.emergencyContainer}>
              <img style={{ display: "inline" }} src={Danger} />
            </div>
            :
            <></>
          }
          <label style={{ display: "inline" }}>{props.requestTag}</label>
          <button onClick={e => handleClick(e, "more")} style={styles.moreInfo}>more info +</button>
        </div>
      </div>

  )
}

const styles = ({
  cardContainer: {
    height: "38%",
    width: "30%",
    marginRight: "5%",
    marginBottom: "5%",
    backgroundColor: "white",
    border: ".5px solid gray",
    boxSizing: "border-box",
    boxShadow: "#9E9E9E",

  },
  cardContainerLong: {
    height: "38%",
    width: "100%",
    marginRight: "5%",
    marginBottom: "5%",
    backgroundColor: "white",
    border: ".5px solid gray",
    boxSizing: "border-box",
    boxShadow: "#9E9E9E",
  },
  name: {
    fontSize: "18px",
    fontFamily: "SF Pro Display",
    lineHeight: "21px",
    display: "flex",
    color: "black",
    marginBottom: "2%",
  },
  phoneEmail: {
    fontSize: "14px",
    fontStyle: "italic",
    color: "gray",
  },
  moreInfo: {
    display: "inline",
    marginLeft: "13%",
    background: "none",
    borderWidth: 0,
    fontSize: 15,
  },
  requestText: {
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "black"
  },
  emergencyContainer: {
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    float: "left",
    height: "3%",
    width: "13%",
    backgroundColor: "#FFB383",
    marginLeft: "1%",
    marginRight: "5%",
    marginBottom: "1%",
    paddingBottom: "5px",
    color: "black",
    alignItems: "center"
  }
})

export default RequestCards;