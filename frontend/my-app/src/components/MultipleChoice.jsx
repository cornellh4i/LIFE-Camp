import RadioButton from './RadioButton';
import { useState } from 'react';


//pass in list of options 


const MultipleChoice = props => {
    const [selected, setSelected] = useState();

    function valueHandler(selectedVal) {
        setSelected(selectedVal.target.value);
        props.onChange(selectedVal);
    };

    return (
        props.values.map((label =>
            <div style={styles.row}>
                <RadioButton value={label} label={label} selectedOption={selected} onValueChange={valueHandler} />
            </div>
        ))

    )
}

const styles = ({
    row: {
        display: "inline-flex",
        paddingRight: 25,
    }
});

export default MultipleChoice;