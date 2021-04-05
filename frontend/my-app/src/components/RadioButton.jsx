const RadioButton = props => {
    return (
      <div>
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
    inputLabel: {
      marginRight:"0%"
    }

  });
  
  export default RadioButton;