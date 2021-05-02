import { useState } from 'react';

const Select = props => {
  const [value, setValue] = useState("");

  function valueHandler(selectedVal) {
    setValue(selectedVal.target.value);
    props.handleChange(selectedVal);
  };

  return (
    <div >
      <label style={styles.inputLabel}> {props.label} </label>

      <select style={props.request ? styles.requestSelect : styles.select } value={value} onChange={valueHandler}>
      <option value="" disabled selected>{props.placeholder}</option>
        {props.values.map((val, i) => <option key={val} value={val}>{val}</option>)}
      </select>
    </div >
  )
}
const styles = ({
  select: {
    width: "20%",
    height: "35px",
    display: "inline",
    alignItems: "right",
    justifyContent: "flex-start",
    margin: "auto",
    marginTop: 5,
    marginBottom: 15,
    marginRight: "71%",
    lineHeight: "20px",
    borderRadius: "20px",
    borderColor: "#7D7674",
    borderWidth: 1,    
    paddingLeft: "10px"
  },
  inputLabel: {
    color: "black",
    display: "flex",
    justifyContent: "left",
    fontSize: 18,
    paddingLeft: "5%",
    fontWeight: "500",
  }, 
  requestSelect: {
    width: "100%",
    height: "35px",
    display: "inline",
    alignItems: "right",
    justifyContent: "flex-start",
    margin: "auto",
    marginTop: 5,
    marginBottom: 15,
    marginRight: "71%",
    lineHeight: "20px",
    borderRadius: "8px",
    border: "1px solid #C4C4C4",
    borderWidth: 1,    
    paddingLeft: "10px"
  }

});
export default Select;
