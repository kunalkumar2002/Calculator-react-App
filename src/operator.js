import ButtonOfCalc from "./buttonOfcalc";
import './operator.css'

function Operator(props) {
    const {handleInputButton} = props;
    

    return (

        <div className='operator'>
        <ButtonOfCalc
            handleInputButton={handleInputButton}
            style={styles.button}
            value={'+'}
            key={'+'}
        />
        <ButtonOfCalc
            handleInputButton={handleInputButton}
            style={styles.button}
            value={'-'}
            key={'-'}
        />
        <ButtonOfCalc

            handleInputButton={handleInputButton}
            style={styles.button}
            value={'*'}
            key={'*'}
        />
        <ButtonOfCalc
            handleInputButton={handleInputButton}
            style={styles.button}
            value={'/'}
            key={'/'}
        />
        <ButtonOfCalc
            handleInputButton={handleInputButton}
            style={styles.buttonEqual}
            value={'='}
            key={'='}
        />
    </div>
    )
}

const styles = {
    button:{
        width: '80%',
        height: '15%',
    },
    buttonEqual:{
        width: '80%',
        height: '15%'
    }
}

export default Operator;