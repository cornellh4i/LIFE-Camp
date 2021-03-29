const RadioButton = props => {
    return (
      <div>
        <label>{props.label}</label>
        <input
              type="radio"
              value={props.value}
              checked={props.selectedOption === props.value}
              onChange={props.onValueChange}
            />
      </div>
    )
  }
  
  export default RadioButton;