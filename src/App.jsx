import './App.css';
import React, { useState} from "react";

function App() {
  const [input, setInput] = useState(0);


  const addNumber = (e) => {
    let i = input.toString().indexOf('.');

    if(input.toString()==='0' && e.target.value !== '.'){
      return(setInput(e.target.value))
    }

    if(input.toString() === '0' && e.target.value === '.'){
      return(setInput(input+e.target.value))
    }

    if(e.target.value==='.'){
      if(input.toString().includes('+')){
        let ind = input.toString().indexOf('+')
        let newStr = input.toString().slice(ind+1);
        if(newStr === ''){
          return(setInput(input+0+e.target.value))
        }
      }
    }

    if(e.target.value==='.'){
      if(input.toString().includes('-')){
        let ind = input.toString().indexOf('-')
        let newStr = input.toString().slice(ind+1);
        if(newStr === ''){
          return(setInput(input+0+e.target.value))
        }
      }
    }

    if(e.target.value==='.'){
      if(input.toString().includes('*')){
        let ind = input.toString().indexOf('*')
        let newStr = input.toString().slice(ind+1);
        if(newStr === ''){
          return(setInput(input+0+e.target.value))
        }
      }
    }

    if(e.target.value==='.'){
      if(input.toString().includes('/')){
        let ind = input.toString().indexOf('/')
        let newStr = input.toString().slice(ind+1);
        if(newStr === ''){
          return(setInput(input+0+e.target.value))
        }
      }
    }

    if(i+1!==0 && e.target.value === '.'){
      if(input.toString().includes('+')){
        let ind = input.toString().indexOf('+')
        let newStr = input.toString().slice(ind+1);
        if(newStr.includes('.')){
          return(setInput(input))       
        }
      }
      
      else if(input.toString().includes('-')){
        let ind = input.toString().indexOf('-')
        let newStr = input.toString().slice(ind+1);
        if(newStr.includes('.')){
          return(setInput(input))       
        }
      }else if(input.toString().includes('*')){
        let ind = input.toString().indexOf('*')
        let newStr = input.toString().slice(ind+1);
        if(newStr.includes('.')){
        return(setInput(input))       
        }
      }else if(input.toString().includes('/')){
        let ind = input.toString().indexOf('/')
        let newStr = input.toString().slice(ind+1);
        if(newStr.includes('.')){
        return(setInput(input))       
        }
      }

      else{
        return(setInput(input))
      }
    }

    if(input.toString().includes('+') || input.toString().includes('-') || input.toString().includes('*') || input.toString().includes('/')){
      if(input.toString().includes('+')){
        let i = input.toString().indexOf('+')
        let newStr = input.toString().slice(i+1);
        if(newStr==='0' && e.target.value === '0'){
          return(setInput(input))
        }
      }

      if(input.toString().includes('-')){
        let i = input.toString().indexOf('-')
        let newStr = input.toString().slice(i+1);
        if(newStr==='0' && e.target.value === '0'){
          return(setInput(input))
        }
      }

      if(input.toString().includes('*')){
        let i = input.toString().indexOf('*')
        let newStr = input.toString().slice(i+1);
        if(newStr==='0' && e.target.value === '0'){
          return(setInput(input))
        }
      }

      if(input.toString().includes('/')){
        let i = input.toString().indexOf('/')
        let newStr = input.toString().slice(i+1);
        if(newStr==='0' && e.target.value === '0'){
          return(setInput(input))
        }
      }
    }
    return(setInput(input+e.target.value))
  }

  const clearOne = () =>{
    if(input.toString() !== 0 && input.toString().length !== 1){
      return(setInput(input.toString().slice(0, -1)))
    }
    else{
      return(setInput(0))
    }
  }

  const clearAll = () =>{
    return(setInput(0))
  }

  const percent = () =>{
    if((input.toString().indexOf('*')+1)===0 && (input.toString().indexOf('/')+1)===0 && (input.toString().indexOf('+')+1)===0 && (input.toString().indexOf('-')+1===0)){
      setInput(input/100)
    }else{
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      let num2 = input.slice(i+1);
      let newNum2;
      if( num2 !== '' && (operation==='/' || operation==='*') ){
        return(setInput(num1+operation+num2/100))
      }
      if( num2 !== '' && (operation==='+' || operation==='-') ){
        newNum2 = num2/100*num1;
        return(setInput(num1+operation+newNum2))
      }
      else{
        return(setInput(parseFloat(input)/100))
      }
    }
  }

  const sqrt = () =>{
    if((input.toString().indexOf('*')+1)===0 && (input.toString().indexOf('/')+1)===0 && (input.toString().indexOf('+')+1)===0 && (input.toString().indexOf('-')+1===0)){
      setInput(Math.sqrt(parseFloat(input)))
    }else{
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      let num2 = input.slice(i+1);
      if( num2 !== ''){
        let sqrtNum = Math.sqrt(num2)
        return(setInput(num1+operation+sqrtNum))
      }
      else{
        return(setInput(Math.sqrt(parseFloat(input))))
      }
    }
  }


  const hyperbola = () =>{
    if((input.toString().indexOf('*')+1)===0 && (input.toString().indexOf('/')+1)===0 && (input.toString().indexOf('+')+1)===0 && (input.toString().indexOf('-')+1)===0){
      return(setInput(1/parseFloat(input)))
    }else{
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      let num2 = input.slice(i+1);
      if(num2 !== ''){
        let hyperbolaNum = 1/num2
        return(setInput(num1+operation+hyperbolaNum))
      }else{
        setInput(1/(parseFloat(input)))
      }    
    }
  }

  const square = () =>{
    if((input.toString().indexOf('*')+1)===0 && (input.toString().indexOf('/')+1)===0 && (input.toString().indexOf('+')+1)===0 && (input.toString().indexOf('-')+1)===0){
      return(setInput(parseFloat(input)**2))
    }else{
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      let num2 = input.slice(i+1);
      if(num2 !== ''){
        let squareNum = num2**2
      return(setInput(num1+operation+squareNum))
      }else{
        setInput(parseFloat(input)**2)
      }    
    }
  }

  const calculation = (oper) =>{
    try{
      setInput(eval(input)+oper);
    }catch{}
  }

  const plus = (e) =>{
    if(!input.toString().includes('/') && !input.toString().includes('*') && !input.toString().includes('+') && !input.toString().includes('-')){
      return(setInput(input+e.target.value))
    }
    if(input.toString().includes('/') || input.toString().includes('-') || input.toString().includes('*')){
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      operation = '+';
      let num2 = input.toString().slice(i+1);
      if(num2){
        return(calculation(operation))
      }else{
        return(setInput(num1+operation))
      }
    }
    else{
      return(calculation('+'))
    }
  }

  const minus = (e) =>{
    if(!input.toString().includes('/') && !input.toString().includes('*') && !input.toString().includes('+') && !input.toString().includes('-')){
      return(setInput(input+e.target.value))
    }
    if(input.toString().includes('/') || input.toString().includes('+') || input.toString().includes('*')){
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      operation = '-';
      let num2 = input.toString().slice(i+1);
      if(num2){
        return(calculation(operation))
      }else{
        return(setInput(num1+operation))
      }
    }
    else{
      return(calculation('-'))
    }
  }

  const multiplication = (e) =>{
    if(!input.toString().includes('/') && !input.toString().includes('*') && !input.toString().includes('+') && !input.toString().includes('-')){
      return(setInput(input+e.target.value))
    }
    if(input.toString().includes('/') || input.toString().includes('-') || input.toString().includes('+')){
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);

      operation = '*';
      let num2 = input.toString().slice(i+1);
      if(num2){
        return(calculation(operation))
      }else{
        return(setInput(num1+operation))
      }
    }
    else{
      return(calculation('*'))
    }
  }

  const division = (e) =>{
    if(!input.toString().includes('/') && !input.toString().includes('*') && !input.toString().includes('+') && !input.toString().includes('-')){
      return(setInput(input+e.target.value))
    }
    if(input.toString().includes('+') || input.toString().includes('-') || input.toString().includes('*')){
      let num1 = parseFloat(input);
      let i = num1.toString().length;
      let operation = input.slice(i,i+1);
      operation = '/';
      let num2 = input.toString().slice(i+1);
      if(num2){
        return(calculation(operation))
      }else{
        return(setInput(num1+operation))
      }
    }
    else{
      return(calculation('/'))
    }
  }

  const calcButton = () =>{
    if((input.toString().indexOf('*')+1)===0 && (input.toString().indexOf('/')+1)===0 && (input.toString().indexOf('+')+1)===0 && (input.toString().indexOf('-')+1)===0){
      return(setInput(input))
    }else{
      if(input.toString().includes('+') || input.toString().includes('-') || input.toString().includes('*') || input.toString().includes('/')){
        if(input.toString().includes('+')){
          let i = input.toString().indexOf('+')
          let num1 = input.toString().slice(0, i);
          let operation = input.toString().slice(i,i+1);
          let num2 = input.toString().slice(i+1);
          if(num2!==''){
            return(setInput(eval(num1+operation+num2)))
          }else{
            return(setInput(num1))
          }
        }

        if(input.toString().includes('-')){
          let i = input.toString().indexOf('-')
          let num1 = input.toString().slice(0, i);
          let operation = input.toString().slice(i,i+1);
          let num2 = input.toString().slice(i+1);
          if(num2!==''){
            return(setInput(eval(num1+operation+num2)))
          }else{
            return(setInput(num1))
          }
        }
      }

      if(input.toString().includes('*')){
        let i = input.toString().indexOf('*')
        let num1 = input.toString().slice(0, i);
        let operation = input.toString().slice(i,i+1);
        let num2 = input.toString().slice(i+1);
        if(num2!==''){
          return(setInput(eval(num1+operation+num2)))
        }else{
          return(setInput(num1))
        }
      }

      if(input.toString().includes('/')){
        let i = input.toString().indexOf('/')
        let num1 = input.toString().slice(0, i);
        let operation = input.toString().slice(i,i+1);
        let num2 = input.toString().slice(i+1);
        if(num2!==''){
          return(setInput(eval(num1+operation+num2)))
        }else{
          return(setInput(num1))
        }
      }

    }
  }
  return (
    <div className="calculator__wrapper">
      <div className="calculator__input">
        <h2>{input}</h2>
      </div>

      <div className="calculator__buttons">
        {/* 1 ряд */}
        <button id='clear' onClick={clearOne}>&#10232;</button>
        <button onClick={clearAll}>C</button>
        <button onClick={sqrt}>&radic;</button>
        <button onClick={percent }>&#37;</button>

        {/* 2 ряд */}
        <button id='num' value={7} onClick={addNumber}>7</button>
        <button id='num' value={8} onClick={addNumber}>8</button>
        <button id='num' value={9} onClick={addNumber}>9</button>
        <button value='/' onClick={division}>&divide;</button>
        <button onClick={hyperbola}>1/x</button>

        {/* 3 ряд */}
        <button id='num' value={4} onClick={addNumber}>4</button>
        <button id='num' value={5} onClick={addNumber}>5</button>
        <button id='num' value={6} onClick={addNumber}>6</button>
        <button value='*' onClick={multiplication}>&times;</button>
        <button onClick={square}>x&sup2;</button>

        {/* 4 ряд */}
        <button id='num' value={1} onClick={addNumber}>1</button>
        <button id='num'  value={2} onClick={addNumber}>2</button>
        <button id='num' value={3} onClick={addNumber}>3</button>
        <button value='-' onClick={minus}>-</button>
        <button  id='equals' onClick={calcButton}>=</button>

        {/* 5 ряд */}
        <button id='zero' value={0} onClick={addNumber}>0</button>
        <button id='num' value='.' onClick={addNumber}>,</button>
        <button value='+' onClick={plus}>+</button>
      </div>
    </div>
  );
}

export default App;
