import x from './images/x.png'

const ActiveFilter = props => {

    // function handleDelete(event){
    //   // event.preventDefault();
    //   const newList = props.selectedFilters.filter((item) => item != event.target.value);
    //   props.setSelectedFilters(newList); 
    //   console.log('value:', event.target.value)
    // }

    function handleDelete(val){
      // event.preventDefault();
      const newList = props.selectedFilters.filter((item) => item != val && item!="");
      props.setSelectedFilters(newList); 
    }

    return (
      <div>
        {props.selectedFilters[1].map((val) =>  
        
        <div style={styles.filter}>
          <img src={x} style={styles.exit} onClick={()=>handleDelete(val)}/>
          <p style={styles.text}>{val}</p>
            {/* <button style={styles.exit} onClick={handleDelete} value={val}> {val} </button> */}
        </div>
        )}
      </div>
    )
  }

  const styles = ({
    filter: {
      width: "10%",
      height: "10%",
      display: "inline-block",
      backgroundColor: "#FFB383",
      alignItems: "right",
      justifyContent: "flex-start",
      margin: "auto",
      marginTop: 5,
      marginBottom: 15,
      marginLeft: 5,
      lineHeight: "20px",
      borderRadius:"11px",
      border:"none",
      paddingLeft: "10px"
    },
    exit: {
      display: "inline-flex",
      justifyContent:"right",
      border:"none", 
      backgroundColor:"#FFB383",
      marginRight:"5%",
      // borderRadius:"11px",
    },
    text: {
      font:"SF Pro Display",
      display:"inline",
      marginRight:"10%"
    }

  });
  
  
  export default ActiveFilter;