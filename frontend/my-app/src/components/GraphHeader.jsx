const GraphHeader = props => {
  function goToTrends(event) {
    props.setTrends(true);
    event.preventDefault();
  }

  function goToRequests(event) {
    props.setTrends(false);
    event.preventDefault();
  }

  return (
    props.trends ?
      <div style={styles.header}>
        <button onClick={goToTrends} style={styles.headerTitleSelected}> {props.title1} </button>
        <button onClick={goToRequests} style={styles.headerTitleFaded}> {props.title2} </button>
      </div>
      :
      <div style={styles.header}>
        <button onClick={goToTrends} style={styles.headerTitleFaded}> {props.title1} </button>
        <button onClick={goToRequests} style={styles.headerTitleSelected}> {props.title2} </button>
      </div>
  )
};
const styles = ({
  header: {
    width: "100%",
    height: "70 px",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    backgroundColor: '#F08633',
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "auto",
    marginBottom: 25,
    lineHeight: "20px",
  },
  headerTitleSelected: {
    color: "white",
    fontSize: 32,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "Be Vietnam",
    fontWeight: "bold",
    marginRight: 20,
    backgroundColor: "#F08633",
    border: "none"
  },
  headerTitleFaded: {
    color: "#F7C399",
    fontSize: 32,
    paddingLeft: 10,
    fontFamily: "Be Vietnam",
    fontWeight: "bold",
    marginRight: 20,
    backgroundColor: "#F08633",
    border: "none"
  },

});

export default GraphHeader;