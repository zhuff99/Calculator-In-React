import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult(result + parseFloat(input || 0));
    setInput('');
  };

  const handleSubtract = () => {
    setResult(result - parseFloat(input || 0));
    setInput('');
  };

  const handleMultiply = () => {
    setResult(result * parseFloat(input || 1));
    setInput('');
  };

  const handleDivide = () => {
    if (parseFloat(input) !== 0) {
      setResult(result / parseFloat(input || 1));
    } else {
      alert('Cannot divide by zero');
    }
    setInput('');
  };

  const resetInput = () => {
    setInput('');
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <h2>{result}</h2>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={handleAdd}>add</button>
        <button onClick={handleSubtract}>subtract</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
        <button className="reset" onClick={resetInput}>
          reset input
        </button>
        <button className="reset" onClick={resetResult}>
          reset result
        </button>
      </div>
    </div>
  );
}

export default App;
