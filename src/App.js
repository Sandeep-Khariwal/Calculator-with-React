import React,{useState} from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState("");

  const clickHandler = (event) =>{
   setResult(result.concat(event.target.value))
  }

  const calculate = () =>{
    console.log(result)
    if(result === "."){
      alert("Enter valid number");
    }else{ 
    setResult(eval(result).toString())
    }
  }

  const clearHandler = ()=>{
    setResult(" ")
  }

  return (
    <div className="calc">
      <div>
  
      <input type='text' placeholder='0' value={result} className='display' />
    
      <input type='button' value="1" className='button' onClick={clickHandler } />
      <input type='button' value="2" className='button' onClick={clickHandler } />
      <input type='button' value="3" className='button' onClick={clickHandler } />
      <input type='button' value="4" className='button' onClick={clickHandler } />
      <input type='button' value="5" className='button' onClick={clickHandler } />
      <input type='button' value="6" className='button' onClick={clickHandler } />
      <input type='button' value="7" className='button' onClick={clickHandler } />
      <input type='button' value="8" className='button' onClick={clickHandler } />
      <input type='button' value="9" className='button' onClick={clickHandler } />
      <input type='button' value="+" className='button' onClick={clickHandler } />
      <input type='button' value="0" className='button' onClick={clickHandler } />
      <input type='button' value="-" className='button' onClick={clickHandler } />
      <input type='button' value="/" className='button' onClick={clickHandler } />
      <input type='button' value="*" className='button' onClick={clickHandler } />
      <input type='button' value="." className='button' onClick={clickHandler } />
      <input type='button' value="=" className='button' onClick={calculate } />
      <input type='button' value="clear" className='button1' onClick={clearHandler } />
      </div>

    </div>
  );
}

export default App;
