import Select from './Select'; 



const FilterSideBar = props => {

    return(
        <div style={styles.filters}>
            <label > Location </label>
              <Select request={true} placeholder={"Choose Zip Code"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={props.zipcodeList}/>
              <Select request={true} placeholder={"Neighborhood"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={props.neighborhoodList}/>
            <label>Request</label>
              <Select request={true} placeholder={"Completed?"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={["Yes", "No"]}/>
              <Select request={true} placeholder={"Request Type"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={props.requestsList}/>
              <Select request={true} placeholder={"Emergency?"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={["Yes", "No"]}/>
            <label>Sort By</label>
              <Select request={true} placeholder={"Choose option"} handleChange={e => props.handleChange (e, props.setFilterRequestType)} values={[""]}/>
            <label>Current settings</label>
            {/* <button style={styles.submit} onClick={handleSave}>SAVE</button> */}
        </div>
    )

}

const styles = {
  trends: {
    flex: 1,
    flexWrap: "nowrap"
  }, 
  filters: {
    marginLeft:"5%", 
    float: "left", 
    height:"100%"
  },
}
export default FilterSideBar;