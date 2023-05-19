
import Add from "./component/Add/Add";
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState()
  // console.log('inputValue',inputValue)
  // console.log('setInputValue',setInputValue)
  const printValue = () => {
    // console.log('inputValue printValue',inputValue)
    return inputValue
  }
  // let inputValue = 5;
  return (
    <div>
      <h1>First React Project</h1>
      <p>This is p tag</p>
      <Add></Add>
      <div>
      <input
       value={inputValue}
       onChange={(e) => {
 
        setInputValue(e.target.value)
        // console.log('inputValue',inputValue);
       }}
        type='number' 
         placeholder='Enter Number'/>
    </div>
    <button onClick={printValue}>print</button>
   { inputValue ? <Add a={inputValue} b='2' ></Add>: ''} 
    </div>
  );
}

export default App;
