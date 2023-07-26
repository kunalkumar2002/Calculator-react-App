import './buttonOfcalc.css'

function ButtonOfCalc(props){
    const {style , value , handleInputButton} = props;
    return (
        <div 
            className='button' id = {value} style={style}
            onClick={handleInputButton}>
            {`${value}`}
        </div>
    )
}

export default ButtonOfCalc;