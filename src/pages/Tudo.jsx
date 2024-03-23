import React, { useState } from 'react';
import Success from '../components/alerts/success'
import { json } from 'react-router-dom';
import axios  from 'axios';
import { useEffect } from 'react';
import TudoApp from '../components/TudoApp';


function Tudo() {
  const [id , setId] = useState(0)
  const [loading, setLoading] = useState(false);
  const [isVisible , setIsVisible] = useState(false)
  const [error,setError] = useState('')
  setTimeout(() => {
    setLoading(true);
  }, 500);

  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    axios.get("/getData").then(response=>{
        setTasks(response.data)
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[tasks])

  const handleToggleComplete = (taskId) => {
        axios.get(`/checked?id=${taskId}`)
        .then(res=>{
          if(res.data != error){
            setTasks(res.data)
          }
        })
  };

  const handleDeleteTask = (taskId) => {
     axios.get(`/delete?id=${taskId}`).then(res=>{
      if(res.data != error){
        setTasks(res.data)
      }
     }).catch(err=>{
      console.log(err)
     })
  };


  const manageBoxes =()=>{
    document.getElementById('taskDiv').style.display='block'
    document.getElementById('newTaskBtn').style.display='none'
  }

  const addNewTask = () => {
      const text = document.getElementById('taskInput').value
      axios.post('/addData',{text:text})
      .then(data=>{
        console.log('data added',data.data)
      })

      document.getElementById('taskDiv').style.display='none'
      document.getElementById('newTaskBtn').style.display='revert'
      document.getElementById('taskInput').value=''
  }

  if (!loading) {
    return (
      <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
   return(<TudoApp tasks={tasks}  Success={Success} isVisible= {isVisible} handleDeleteTask = {handleDeleteTask} handleToggleComplete= {handleToggleComplete} addNewTask={addNewTask} manageBoxes={manageBoxes} />)
}

export default Tudo;
