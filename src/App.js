import './App.css';

import Screen from './Screen';
import Number from './number';
import Operator from './operator';
import { useState } from 'react';

import Evaluate from './eveluatExp';

function App() {

  let [state , setState] = useState(``);

  function evaluate(){
    // console.log("hello");
    
    let final = Evaluate(state);

    if(typeof(final) === 'number'){
      final = final.toString();
    }

    if(final === undefined){
      final = "";
    }

    setState(final);
  }

  function check(){
    if(state === 'Cannot divide by zero ' || state === 'Invalid Expression '){
      clear();
    }
  }

  function clear(){
    state = "";
    setState(state);
  }

  function handleInputKeyBord(e){
    // console.log(e);
    check();
    // console.log(e.key)
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
    check();
    if(e.target.id === 'clear'){
      clear();
    }
    else if(e.target.id === '='){
      // console.log("hello")
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
