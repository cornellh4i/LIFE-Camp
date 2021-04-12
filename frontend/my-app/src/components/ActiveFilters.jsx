import x from './x.png'

const ActiveFilter = props => {
    return (
      <div>
        {props.selectedFilters.map((val,i) =>  
        <div style={styles.filter}>
            {val}
            <button style={styles.exit}> <img src={x}/> </button>
        </div>
        )}
      </div>
    )
  }

  const styles = ({
    filter: {
      width: "30%",
      height: "60px",
      display: "inline",
      backgroundColor: "#F08633",
      alignItems: "right",
      justifyContent: "flex-start",
      margin: "auto",
      marginTop: 5,
      marginBottom: 15,
      lineHeight: "20px",
      borderRadius:"11px",
      border:"none",
      paddingLeft: "10px"
    },
    exit: {
      justifyContent:"left",
      border:"none", 
      backgroundColor:"#F08633",
      borderRadius:"11px",

    }

  });
  
  
  export default ActiveFilter;