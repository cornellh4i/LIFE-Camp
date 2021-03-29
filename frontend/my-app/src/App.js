import './App.css';
import {useState} from 'react'; 
import TextQ from './components/TextQ';
import MultipleChoice from './components/MultipleChoice';

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

  const MultipleChoiceList = ["Male","Female","Other"]
  
  return (
    <div className="App">
      <form>
        <label>Name </label>
        <input type = "text" name ="name" onChange={handleNameChange}></input>
        
        <div>
        <TextQ name="email" label="What is your email?" handleChange={() => setEmail(true)} />
        </div>

        <div>
        <MultipleChoice values={MultipleChoiceList}/>
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

