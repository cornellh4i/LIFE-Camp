

// const Survey = () => {
// return(
//     <div>
//         <h1>MAKE A REQUEST</h1>
//         <h3 className="text">Fill out this form to make a request to LIFE Camp!</h3>
//     <div>
//         <Header title="PERSONAL INFORMATION" />
//     </div>
//     <form>
//         <div><TextQ name="name" label="Name:" handleChange={e => handleChange(e, setName)} /></div>
//         <div><TextQ name="phone" label="Phone Number" handleChange={e => handleChange(e, setPhone)} /></div>
//         <div><TextQ name="email" label="Email address" handleChange={e => handleChange(e, setEmail)} /></div>
//         <div style={styles.first}><Select label="Zipcode" handleChange={e => handleChange(e, setZipcode)} values={zipCodeList} /></div>
//         <div style={styles.second}><Select label="Neighborhood" handleChange={e => handleChange(e, setZipcode)} values={neighborhoodList} /></div>
//         <div style={{ float: "left", width: "100%" }}> </div>
//         <div style={styles.first}> <Select label="Age Range" handleChange={e => handleChange(e, setAge)} values={ageList} /></div>
//         <div style={styles.second}> <Select label="Gender" handleChange={e => handleChange(e, setGender)} values={genderList} /></div>
//         {/* <div><Multichoice name="gender" label="Gender" values={MultipleChoiceList} handleChange={e => handleChange(e, setGender)} /> </div> */}
//         <Header title="FAMILY INFORMATION" />
//         <div style={{ width: "70%", marginLeft: "1%" }} > <Select label="How many people are in your household (excluding yourself)?" handleChange={e => handleChange(e, setNumPeople)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
//         <div style={styles.first}><Select label="How many children?" handleChange={e => handleChange(e, setNumChildren)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
//         <div style={styles.second}> <Select label="How many seniors?" handleChange={e => handleChange(e, setNumSeniors)} values={["0", "1", "2", "3", "4", "5", "6", "7", "8 +"]} /></div>
//         <Header title="REQUESTS" />
//         <div style={{ width: "50%", marginLeft: "2.5%" }}><Select label="Type of Request" handleChange={e => handleChange(e, setRequestType)} values={requestsList} /></div>
//         <div><LargeTextQ name="request" label="Request" handleChange={e => handleChange(e, setRequest)} placeholder="Describe the situation + what you need?" /> </div>
//         <div><Multichoice name="emergency" label="Is this an Emergency?" values={["Yes", "No"]} handleChange={e => handleChange(e, setEmergency)} /></div>
//     </form>
//         <button className="button" style={styles.submit} onClick={handleSubmit}>SUBMIT</button>
//     </div>
// )

// }

// export default Survey; 

