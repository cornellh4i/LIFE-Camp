const TextQ = props => {
  return (
    <div>
      <label style={styles.inputLabel}> {props.label} </label>

      <input style={styles.input} type="text" name={props.name} onChange={props.handleChange} />
    </div>
  )
}

const styles = ({
  input: {
    width: "40%",
    height: "35px",
    display: "inline",
    alignItems: "right",
    justifyContent: "flex-start",
    margin: "auto",
    marginTop: 5,
    marginBottom: 15,
    marginRight: "50%",
    lineHeight: "20px",
    borderRadius: "20px",
    borderColor: "#7D7674",
    borderWidth: 1,
    paddingLeft: "8px"
  },
  inputLabel: {
    color: "black",
    display: "flex",
    justifyContent: "left",
    fontFamily: "Georgia",
    fontSize: 18,
    paddingLeft: "5%",
    fontWeight: "500",
  }

});


export default TextQ;