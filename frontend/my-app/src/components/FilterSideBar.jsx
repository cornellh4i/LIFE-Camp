import Select from './Select';
import { useState } from 'react';


const FilterSideBar = props => {

  const [settings, setSettings] = useState([]);
  const [zipCode, setZipcode] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [completed, setCompleted] = useState("");
  const [request, setRequestType] = useState("");
  const [emergency, setEmergency] = useState("");
  const [saved, setSaved] = useState(false);

  function handleChange(event, setFunction) {
    setFunction(event.target.value);
  }

  function onSave(event) {
    event.preventDefault();
    setSettings([zipCode, neighborhood, completed, request, emergency])
    setSaved(true);
    props.setSelectedFilters([zipCode, neighborhood, completed, request, emergency])
    
  }

  return (
    <div style={styles.filters}>
      <label className="form-mobile"> Location </label>
      <Select request={true} placeholder={"Choose Zip Code"} handleChange={e => handleChange(e, setZipcode)} values={props.zipcodeList} />
      <Select request={true} placeholder={"Neighborhood"} handleChange={e => handleChange(e, setNeighborhood)} values={props.neighborhoodList} />
      <label style={styles.label}>Request</label>
      <Select className="form-mobile" request={true} placeholder={"Completed?"} handleChange={e => handleChange(e, setCompleted)} values={["All", "Yes", "No"]} />
      <Select request={true} placeholder={"Request Type"} handleChange={e => handleChange(e, setRequestType)} values={props.requestsList} />
      <Select request={true} placeholder={"Emergency?"} handleChange={e => handleChange(e, setEmergency)} values={["All", "Yes", "No"]} />
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
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: "5%",
    marginRight: "5%",
    float: "left",
  },
  label: {
    fontWeight: "500",
  },
  submit: {
    marginLeft: "10%",
    float: "bottom",
    marginTop: 20,
    marginLeft: 60,
    background: "#F08633",
    fontColor: "#FFFFFF",
    border: "none",
    width: "90px",
    height: "35px",


    justifyContent: "flex-end",
    fontColor: "white",
    fontSize: 15,
    height: "35px",
    display: "inline",
    fontSize: "18px",

    backgroundColor: "#F08633",
    lineHeight: "20px",
    borderColor: "#F08633",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 60,
  }
}

export default FilterSideBar;
