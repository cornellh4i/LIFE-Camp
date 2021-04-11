const RadioButton = props => {
  return (
    <div style={styles.radio}>
      <input
        type="radio"
        value={props.value}
        checked={props.selectedOption === props.value}
        onChange={props.onValueChange}
      />
      <label style={styles.inputLabel}>{props.label}</label>

    </div>
  )
}
const styles = ({
  radio: {
    height: "35px",
    display: "flex",
    alignItems: "right",
    justifyContent: "flex-start",
    marginLeft: "15%",
    paddingLeft: "10px"
  }

});

export default RadioButton;