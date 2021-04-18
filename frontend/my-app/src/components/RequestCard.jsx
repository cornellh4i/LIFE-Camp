import Danger from './images/Danger.png'
import Phone from './images/Phone.png'
import Message from './images/Message.png'

const RequestCard = props => {
    return (
      <div >
        <div style={styles.cardContainer}>
        <div>
          <label > {props.name} </label>
          <p style={{display:"inline", marginLeft:"28%"}}>Complete?</p><input type="checkbox" name="Complete?" onChange={props.handleChange} />
        </div>
        <div>
          <img style={{display:"inline"}}src = {Phone}/> 
          <label style = {styles.phoneEmail}> {props.phone} </label>
        </div>
        <img src = {Message} />
        <label style = {styles.phoneEmail}>  {props.email} </label>
        <p>"{props.requestText}"</p>
        <div style={{display:"inline"}}>
          {props.emergency ? 
              <div style={styles.emergencyContainer}>
              <img style={{display:"inline"}}src = {Danger}/> 
              <label style={{fontSize: "14 px"}}>Emergency</label>
              </div>
              :
              <></>
          }
        <label style={{display:"inline"}}>{props.requestTag}</label>
        <label style={{display:"inline", marginLeft:"10%" }}>more info +</label>

        </div>

        </div>
      </div>
    )
  }
  
  const styles = ({
    cardContainer:{
        height:"200px", 
        width:"300px", 
        alignItems: "flex-start",
        backgroundColor:"white", 
        border: ".5px solid gray",
        boxSizing: "border-box",
        margin:"auto", 
        boxShadow: "#9E9E9E", 
        marginBottom:"10%"

    },
    name:{
      fontSize:"18px",
      fontFamily:"SF Pro Display",
      lineHeight: "21px",
      display:"flex",
      color:"black",
      marginBottom:"2%"
    },
    phoneEmail:{
      fontSize:"14px",
      fontStyle: "italic",
      color: "gray",
    },
    requestText:{
      fontSize:"14px",
      fontFamily:"Roboto",
      color:"black"
    },
    emergencyContainer:{
        display:"inline", 
        height:"30px", 
        width:"100px", 
        backgroundColor: "#FFB383",
        marginLeft:"1%", 
        marginRight: "5%",
        padding: "5px",
        color: "black",
        alignItems:"center"
    }
  })

  export default RequestCard; 