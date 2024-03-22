import React,{useState} from 'react'
import CounterApp from '../components/CounterApp'

function Counter() {
  const [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 500);
  return (
    <div>
     <CounterApp loading={loading}/>
    </div>
  )
}

export default Counter
