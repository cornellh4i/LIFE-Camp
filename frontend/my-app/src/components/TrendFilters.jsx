import Select from './Select';
import { useState } from 'react';
import DatePicker from 'react-date-picker';


const FilterSideBar = props => {

  const [settings, setSettings] = useState([]);
  const [zipCode, setZipcode] = useState("");
  const [age, setAge] = useState("");
  const [saved, setSaved] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  function handleChange(event, setFunction) {
    // setSaved(false);
    setFunction(event.target.value);
  }

  function onSave(event) {
    event.preventDefault();
    console.log(startDate);
    setSettings(["Location: " + zipCode, "Age: " + age, "Start Date: " + formatDate(startDate), "End Date: " + formatDate(startDate)])
    setSaved(true);
    props.onSaveTrendFilters([zipCode, age, formatDate(startDate), formatDate(endDate)]);
  }

  function formatDate(dateStr) {
    if (dateStr === null) {
      return "";
    }
    var localeDateString = dateStr.toLocaleDateString();
    var dateList = localeDateString.split("/");
    for (var i = 0; i < dateList.length; i++) {
      if (dateList[i].length == 1) {
        dateList[i] = "0" + dateList[i];
      }
    }
    var month = dateList[0];
    var date = dateList[1];
    var year = dateList[2];
    return year + "-" + month + "-" + date;

  }

  return (
    <div style={styles.filters}>
      <label className="form-mobile"> Location </label>
      <Select request={true} placeholder={"Choose Zip Code"} handleChange={e => handleChange(e, setZipcode)} values={props.zipcodeList} />
      <label style={styles.label}>Age</label>
      <Select className="form-mobile" request={true} placeholder={"Choose age range"} handleChange={e => handleChange(e, setAge)} values={props.ageList} />
      <label style={styles.label}>Start Date</label>
      <DatePicker style={styles.datePicker} onChange={setStartDate} value={startDate} />
      <label style={styles.label}>End Date</label>
      <DatePicker style={styles.datePicker} onChange={setEndDate} value={endDate} />
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
  },
  datePicker: {
    paddingTop: 20,
    marginBottom: "5%"
  }
}

export default FilterSideBar;