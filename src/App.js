import { useEffect, useState } from 'react';


function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['/','*','+','-','.']
  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) return;
      else {
       setCalc(calc + value)
      }
      if(!ops.includes(value)){
        setResult(eval(calc + value ).toString())
      }
  }
  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  const deleteLast = () => {
    if (calc == '')
    return;
    setResult(result)
    const value = calc.slice(0,-1)
    setCalc(value)
  }
  
  return (
    <div className="calculator">
      <div className="container">
        <div className="output">
          <span>({result? result : ''})</span> {calc || "0"} 
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => deleteLast()}>DEl</button>
        </div>
        <div className="numbers">
          <div className="one"><button className="btn btn1" onClick={() => updateCalc('1')}>1</button></div>
          <div className="two"><button className="btn btn2" onClick={() => updateCalc('2')}>2</button></div>
          <div className="three"><button className="btn btn3" onClick={() => updateCalc('3')}>3</button></div>
          <div className="four"><button className="btn btn4" onClick={() => updateCalc('4')}>4</button></div>
          <div className="five"><button className="btn btn5" onClick={() => updateCalc('5')}>5</button></div>
          <div className="six"><button className="btn btn6" onClick={() => updateCalc('6')}>6</button></div>
          <div className="seven"><button className="btn btn7" onClick={() => updateCalc('7')}>7</button></div>
          <div className="eight"><button className="btn btn8" onClick={() => updateCalc('8')}>8</button></div>
          <div className="nine"><button className="btn btn9" onClick={() => updateCalc('9')}>9</button></div>
          <div className="dot"><button className="btn btnDot" onClick={() => updateCalc('.')}>.</button></div>
          <div className="zero"><button className="btn btn0" onClick={() => updateCalc('0')}>0</button></div>
          <div className="reset"><button className="btn btn#" onClick={() => calculate()}>=</button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
