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
    display: "inline-flex",
    backgroundColor: '#F7C399',
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "auto",
    marginTop: 25,
    marginBottom: 25,
    // lineHeight: "20px",
  },
  headerTitle: {
    color: "white",
    fontSize: 27,
    paddingLeft: 6,
    marginTop: 5,
    marginBottom: 10
  }
});

export default Header;