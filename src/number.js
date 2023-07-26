import './number.css';

import ButtonOfCalc from './buttonOfcalc';

function Number(props){

    const values = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "."];
    const {handleInputButton} = props;


    return (
        <div className='num-Btn'> 

          <ButtonOfCalc 
                key={'clear'} 
                style={styles.buttonClear}
                value={'clear'} 
                handleInputButton={handleInputButton}
          />

        {
            values.map((num) => {
                // console.log(num);
                return (
                    <ButtonOfCalc 

                        key={num}
                        value={num}
                        handleInputButton={handleInputButton}

                    />
                    
                   
                )
            })
        }

            <ButtonOfCalc 

                key={0} 
                style={styles.buttonZero} 
                value={0}
                handleInputButton={handleInputButton}

            />

        </div>

    )
}

const styles = {

    buttonClear: {
        width:'80%',
        height: '10%',
    },
    buttonZero: {
        width:'50%',
        height: '10%',
    }
}

export default Number;