const TextQ = props => {
    return (
      <div>
        <label> {props.label} </label>
        <input type="text" name={props.name} onChange={props.handleChange} />
      </div>
    )
  }
  
  export default TextQ;