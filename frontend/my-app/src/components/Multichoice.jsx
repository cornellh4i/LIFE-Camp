import MultipleChoice from './MultipleChoice';

const Multichoice = props => {
  return (
    <div >
      <label style={styles.inputLabel}> {props.label} </label>
      <div style={styles.radios}>
        <MultipleChoice values={props.values} onChange={event => props.handleChange(event)} />
      </div>
    </div>

  )
}

const styles = ({
  inputLabel: {
    color: "black",
    display: "flex",
    justifyContent: "left",
    fontSize: 18,
    paddingLeft: "15%",
    fontWeight: "500",
    marginBottom: 10,
  },
  radios: {
    justifyContent: "flex-start",
    height: "35px",
    paddingLeft: "15%",
    textAlign: "left",
  }

});

export default Multichoice;


