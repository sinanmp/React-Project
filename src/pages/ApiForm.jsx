import React,{useEffect , useState} from 'react'
import axios from 'axios'
import ApiFormComponent from '../components/ApiFormComponent'

function ApiForm() {
  const [count ,setCount] = useState(0)
  const [data , setData] = useState(null)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(data=>{
      setData(data.data)
    }).catch(error=>{
      console.log(error)
    })
  },[count]) 

  const manageCount = (event)=>{
     if(event == '+'){
      if(count < 10){
        setCount(count+1)
      }
     }else{
      if(count>1){
        setCount(count-1)
      }
     }
  }

  return (
       <ApiFormComponent data={data} manageCount={manageCount}/>
       
  )
}

export default ApiForm
