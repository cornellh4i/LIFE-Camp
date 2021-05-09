import Danger from './images/Danger.png';
import Phone from './images/Phone.png';
import Message from './images/Message.png';
import { useState } from 'react';

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
              <label style={{ fontSize: "14 px" }}>Emergency</label>
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
              <label style={{ fontSize: "14 px" }}>Emergency</label>
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
    marginLeft: "10%",
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
    display: "inline",
    height: "30px",
    width: "100px",
    backgroundColor: "#FFB383",
    marginLeft: "1%",
    marginRight: "5%",
    padding: "5px",
    color: "black",
    alignItems: "center"
  }
})

export default RequestCard; 