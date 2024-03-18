import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sinan , setSinan] = useState('sinan')


  const handleCount = (action)=>{
    if(action=='-'){
      if(count >=1){
        setCount(count-1)
      }
    }else{
      setCount(count+1)
    }
    
  }

  const changeName = (e)=>{
    const newValue = e.target.value;
    // Update the state with the new value
    setSinan(newValue);
    console.log(sinan);
  }

  return (
    <>
    <button onClick={()=>handleCount('-')}>-click</button>
    <h1 className='text-3xl font-bold underline'>{count}</h1>
    <button onClick={()=>handleCount('+')}>+click</button>
    <input type="text" value={sinan} onChange={changeName} />
    </>
  )
}

export default App
