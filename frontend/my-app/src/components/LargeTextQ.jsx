const LargeTextQ = props => {
  return (
    <div>
      <label style={styles.inputLabel}> {props.label} </label>
      <input style={styles.input} type="text" name={props.name} placeholder={props.placeholder} onChange={props.handleChange} />
    </div>
  )
}

const styles = ({
  input: {
    width: "70%",
    height: "150px",
    display: "inline",
    alignItems: "right",
    justifyContent: "flex-start",
    margin: "auto",
    marginTop: 5,
    marginBottom: 15,
    marginRight: "60%",
    marginLeft: "5%",
    lineHeight: "20px",
    borderRadius: "20px",
    borderColor: "#7D7674",
    borderWidth: 1,
    padding: "10px"
  },
  inputLabel: {
    color: "black",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    fontSize: 18,
    paddingLeft: "5%",
    fontWeight: "500",

  }

});


export default LargeTextQ;