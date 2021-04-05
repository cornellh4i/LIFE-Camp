import { useState } from 'react';

const Select = props => {
  const [age, setAge] = useState("");

  return (
    <div >
      <label style={styles.inputLabel}> {props.label} </label>
      <div style={styles.container}>
        <select value={age} selectedOption={age} onValueChange={() => setAge(age)} onChange={props.handleChange}>
          {Array.from({ length: 90 }).map((opt, i) => <option key={i + 10} value={i + 10}>{i + 10}</option>)}
        </select>
      </div>

    </div>
  )
}
const styles = ({
  container: {
    justifyContent: "column",
    flex: 1,
    marginRight:"65%",

  },
  inputLabel: {
    color: "black",
    display:"flex",
    justifyContent:"left",
    fontSize: 18,
    paddingLeft:"15%",
    fontWeight:"500",
  }

});
export default Select;