import './App.css';

import Screen from './Screen';
import Number from './number';
import Operator from './operator';
import { useState } from 'react';

function App() {

  let [state , setState] = useState(``);

  function evaluate(){
    
  }

  function clear(){
    state = "";
    setState(state);
  }

  function handleInputKeyBord(e){
    // console.log(e);
    if(e.key === 'Enter'){
      evaluate()
    }
    else{

      state = (e.target.value);
      setState(state)
      // console.log(state);
    
    }
    
  }

  function handleInputButton(e){
    if(e.target.id === 'clear'){
      clear();
    }
    else if(e.target.id === '='){
      evaluate();
    }
    else {
      state += e.target.id;
      setState(state);
    }
  }

  return (
    <div className="App">
     
      <Screen 
         state={state}
         setState = {setState}
         handleInputKeyBord = {handleInputKeyBord}
      />
      <Number handleInputButton = {handleInputButton}/>
      <Operator handleInputButton = {handleInputButton}/>
    </div>
  );
}

export default App;
