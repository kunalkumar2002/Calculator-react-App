import './Screen.css'

function Screen(props){
    let {state , handleInputKeyBord} = props;
    return (
        <div className='screen'>
            <input
                value={state}
                onKeyDown={handleInputKeyBord}
                onChange={handleInputKeyBord}
            />
        </div>
    )
}

export default Screen;