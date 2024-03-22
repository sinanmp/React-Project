import React, { useState } from 'react';
import '../../src/App.css'

function CounterApp({loading}) {

  if(!loading){
    return (
      <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

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
    <div className="container mt-32">
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
