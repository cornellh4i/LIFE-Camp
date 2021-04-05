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
      width: "30%",
      height: "35px",
      display: "inline",
      backgroundColor: "rgba(255, 208, 193, 0.5)",
      alignItems: "right",
      justifyContent: "flex-start",
      margin: "auto",
      marginTop: 0,
      marginBottom: 25,
      marginRight:"40%",
      lineHeight: "20px",
      borderRadius:"20px",
      border:"none"
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
  
  
  export default TextQ;