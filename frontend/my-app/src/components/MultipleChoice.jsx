import RadioButton from './RadioButton';
import {useState} from 'react'; 


//pass in list of options 


const MultipleChoice = props => {
    const [selected, setSelected] = useState(props.values[0]); 

    return (
        props.values.map((label => 
            <div>
                <RadioButton value={label} label={label} selectedOption={selected} onValueChange={()=>setSelected(label)}/>
            </div>
        ))
     
    )
  }
  
  export default MultipleChoice;