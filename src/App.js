import './App.css';
import CasioHeader from './components/CasioHeader'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Ingresá valores para realizar los cálculos.")
    }
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        <CasioHeader />
        <Screen input={input}/>
        <div className='row'>
          <Button manejarClick={addInput}>7</Button>
          <Button manejarClick={addInput}>8</Button>
          <Button manejarClick={addInput}>9</Button>
          <Button manejarClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button manejarClick={addInput}>4</Button>
          <Button manejarClick={addInput}>5</Button>
          <Button manejarClick={addInput}>6</Button>
          <Button manejarClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClick={addInput}>1</Button>
          <Button manejarClick={addInput}>2</Button>
          <Button manejarClick={addInput}>3</Button>
          <Button manejarClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClick={addInput}>0</Button>
          <Button manejarClick={addInput}>.</Button>
          <Button manejarClick={calculateResult}>=</Button>
          <Button manejarClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <ClearButton manejarClear={() => setInput('')}>
            C
          </ClearButton>
          <a
            target="_blank"
            className='button-container'
            href="https://www.freecodecamp.org/">
            freeCodeCamp
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
