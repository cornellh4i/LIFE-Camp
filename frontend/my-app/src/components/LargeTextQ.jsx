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
      backgroundColor: "rgba(255, 208, 193, 0.5)",
      alignItems: "right",
      justifyContent: "flex-start",
      margin: "auto",
      marginTop: 5,
      marginBottom: 15,
      marginRight:"0%",
      lineHeight: "20px",
      borderRadius:"20px",
      border:"none",
      padding: "5px"
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
  
  
  export default LargeTextQ;