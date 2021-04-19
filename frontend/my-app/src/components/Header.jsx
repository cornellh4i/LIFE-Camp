const Header = props => {
    return (
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>{props.title}</h2>
      </div>
    )
  };
  const styles = ({
    header: {
      width: "90%",
      height: "30 px",
      paddingLeft: 6,
      display: "flex",
      backgroundColor: '#F08633',
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "auto",
      marginTop: 25,
      marginBottom: 25,
      lineHeight: "20px",
    },
    headerTitle: {
      color: "white",
      fontSize: 18,
      paddingLeft: 6,
    }
  });
  
  export default Header;