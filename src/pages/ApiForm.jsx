import React,{useEffect , useState} from 'react'
import axios from 'axios'
import ApiFormComponent from '../components/ApiFormComponent'

function ApiForm() {
  const [count ,setCount] = useState(1)
  const [data , setData] = useState(null)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(data=>{
      setData(data.data)
      console.log(data.data)
    }).catch(error=>{
      console.log(error)
    })
  },[count]) 
  return (
       <ApiFormComponent data={data}/>
  )
}

export default ApiForm
