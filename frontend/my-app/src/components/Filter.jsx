 
import {useState} from 'react';
const Filter = props => {
    const [value, setValue] = useState("");
    
    function valueHandler(selectedVal) {
      setValue(selectedVal.target.value);
      props.handleChange(selectedVal);
      props.addFilter([... props.selectedFilters, value]);
    };

    function updateFilters(){
        props.addFilter([... props.selectedFilters, value]);
        // const newList = props.selectedFilters.filter((item) => item != props.label);
        // props.addFilter(newList)
    }

    return (
      <div >
        <select style={styles.select} value={value} onChange={valueHandler} >
          {/* <option key={0} value={""}></option> */}
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
      marginRight: "51%",
      lineHeight: "20px",
      border: "1px solid #C4C4C4",
      borderRadius: "8px",
      paddingLeft: "10px"
    },
    inputLabel: {
      color: "black",
      display: "flex",
      justifyContent: "left",
      fontSize: 18,
      paddingLeft: "15%",
      fontWeight: "500",
    }
  
  });
  export default Filter;
  