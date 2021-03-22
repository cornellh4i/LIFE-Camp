import './App.css';
import {useState} from 'react'; 

function App() {
  
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [fruit, setFruit] = useState(""); 
  const [showOutput, setShowOutput] = useState(false);
  
  function handleSubmit(event){
    console.log(name, email, fruit)
    // alert("Hello "  "the Form was submitted! ");
    setShowOutput(true);
    event.preventDefault();
  }

  function handleNameChange(event){
    setShowOutput(false);
    setName(event.target.value); 
  }

  function handleEmailChange(event){
    setShowOutput(false);
    setEmail(event.target.value)
  }

  function handleFruitChange(event){
    setShowOutput(false);
    setFruit(event.target.value); 
  }
  
  return (
    <div className="App">
      <form>
        <label>Name </label>
        <input type = "text" name ="name" onChange={handleNameChange}></input>
        
        <div>
          <label>Email </label>
          <input type = "text" name ="email" onChange= {handleEmailChange} ></input>
        </div>

        <div>
          <label>Favorite Fruit </label>
          <select value = {fruit} onChange={handleFruitChange}>
            <option value=""></option>
            <option value="Mango">Mango</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Watermelon">Watermelon</option>
            <option value="Peach">Peach</option>
          </select>
        </div>
      <button onClick = {handleSubmit}>Submit</button>
      </form>

      {showOutput? 
        <div>
          <p>Name: {name} </p>
          <p>Email: {email} </p>
          <p>Fruit: {fruit} </p>
        </div>
        :
        <></>
    }
    
    </div>
  );
}

export default App;

