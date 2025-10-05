import { useState } from 'react'

import './App.css'
import { column } from 'mathjs';


function App() {
  const [expr, setExpr] = useState("");
  const [ans, setAns] = useState("");

  const Buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];
  const simpleEvaluate = (e) => {
    return Function(`return (${e})`)();

  }
const handleClick = (key) => {
  if(key === "C"){
    setExpr("");
    setAns("");
    return;
  }
  else if(key === "="){
   if(!expr){
     setAns("Error");
  }

   const res = simpleEvaluate(expr);
   setAns(String(res));
   return;
  }
  else {
    setExpr(expr.concat(key));
  }
  

}
 
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='App' style={{width: "500px"}}>

          <h1 style={{textAlign: 'center'}}>React Calculator</h1>
          <div style={{textAlign: 'center'}}>
            <input
            name = "input"
            value = {expr}
            type = "text"
           readOnly
            />
          </div>
          <br/>
          <div style={{textAlign: 'center'}}>
           {ans}
          </div>
          <br/>
          <br/>
      <div
  style={{
    display: 'grid', 
    gap: '5px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    textAlign: 'center'
  }}
>
  {Buttons.map((btn) => (
    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
  ))}
</div>

          
        </div>
        </div>
  )
}

export default App
