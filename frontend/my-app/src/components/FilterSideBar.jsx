import Select from './Select'; 
import {useState} from 'react';


const FilterSideBar = props => {

  const [settings, setSettings] = useState([]); 
  const [zipCode, setZipcode] = useState(0); 
  const [neighborhood, setNeighborhood] = useState(""); 
  const [completed, setCompleted] = useState(""); 
  const [request, setRequestType] = useState("");
  const [emergency, setEmergency] = useState(""); 
  const [chooseOption, setChooseOption] = useState(""); 
  const [saved, setSaved] = useState(false); 

  function handleChange(event, setFunction) {
    // setSaved(false);
    setFunction(event.target.value);
  }

  function onSave(event){
    event.preventDefault();
    setSettings([zipCode, neighborhood, completed, request, emergency, chooseOption])
    setSaved(true);
  }
  
    return(
        <div style={styles.filters}>
            <label style={styles.label}> Location </label>
              <Select request={true} placeholder={"Choose Zip Code"} handleChange={e => handleChange (e, setZipcode)} values={props.zipcodeList}/>
              <Select request={true} placeholder={"Neighborhood"} handleChange={e => handleChange (e, setNeighborhood)} values={props.neighborhoodList}/>
            <label style={styles.label}>Request</label>
              <Select request={true} placeholder={"Completed?"} handleChange={e => handleChange (e, setCompleted)} values={["Yes", "No"]}/>
              <Select request={true} placeholder={"Request Type"} handleChange={e => handleChange (e, setRequestType)} values={props.requestsList}/>
              <Select request={true} placeholder={"Emergency?"} handleChange={e => handleChange (e, setEmergency)} values={["Yes", "No"]}/>
            <label style={styles.label}>Sort By</label>
              <Select request={true} placeholder={"Choose option"} handleChange={e => handleChange (e, setChooseOption)} values={["filler1" ,"filler2", "filler3"]}/>
            <label style={styles.label}>Current settings </label>
            {
              saved ? 
              <p>
                {settings.map((val) => <p> {val} </p>)}
                </p>
              :
              <p>none</p>
            }
            
            <div>
              <button style={styles.submit} onClick={onSave}>SAVE</button>
            </div>
        </div>

    )

}

const styles = {
  trends: {
    flex: 1,
    // flexWrap: "nowrap"
  }, 
  filters: {
    marginLeft:"5%", 
    float: "left", 
    // height:"100%"
  },
  label: {
    fontWeight:"500", 
  },
  submit: {
    marginLeft:"10%",
    float:"bottom", 
    marginTop: 20,
    marginLeft: 60,
    background: "#F08633",
    fontSize: "18px",
    fontColor:"#FFFFFF",
    fontFamily: "Be Vietnam", 
    border: "none", 
    width: "90px", 
    height: "35px", 
  }
}
export default FilterSideBar;