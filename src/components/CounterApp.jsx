import React, { useState } from 'react';
import '../../src/App.css'

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleCount = (action) => {
    if (action === '-') {
      if (count > 0) {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title font-mono">Counter App</h1>
      <div className="counter-container">
        <button style={{backgroundColor:"red"}} onClick={() => handleCount('-')} className="counter-button">
          -
        </button>
        <h1 className="counter">{count}</h1>
        <button style={{backgroundColor: 'green'}} onClick={() => handleCount('+')} className="counter-button">
          +
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
