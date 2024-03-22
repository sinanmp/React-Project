import React, { useState } from 'react';
import Success from '../components/alerts/success'
import { json } from 'react-router-dom';

function Tudo() {
  const [id , setId] = useState(0)
  const [loading, setLoading] = useState(false);
  const [isVisible , setIsVisible] = useState(false)
  const [error,setError] = useState('')
  setTimeout(() => {
    setLoading(true);
  }, 500);

  const [tasks, setTasks] = useState([]);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  const manageBoxes =()=>{
    document.getElementById('taskDiv').style.display='block'
    document.getElementById('newTaskBtn').style.display='none'
  }

  const addNewTask = () => {
      const value = document.getElementById('taskInput').value
      setId(id+1)
      const obj = {
        id : id,
        text:value,
        completed:false
      }
      localStorage.setItem(id+1,JSON.stringify(obj))
      console.log(localStorage.getItem(1))

      for(let i=0 ; i<tasks.length ; i++){
        if(tasks[i].text == value){
          setError("this task is already added")
          document.getElementById('Error').innerHTML=error
          console.log(error)
          return
        }
      }

    
      setTasks([...tasks,obj])
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

  return (
    <div>
      <Success isVisible={isVisible} />
      <h1 className='font-bold font-mono text-4xl mt-10'>Tudo App</h1>
      <button id='newTaskBtn' onClick={manageBoxes} className="bg-blue-500 mt-7 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md">
       Add a new Task+
      </button>
      <div id='taskDiv' className='mt-5' style={{display:'none'}}>
      <input type="text" id='taskInput' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Add task" />
      <button onClick={addNewTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md">
       Add
      </button>
      </div>
      <div id='Error'></div>
   
      <div className="container mx-auto mt-10 px-4">
        <div className="max-h-72 overflow-y-auto bg-slate-300 rounded-lg shadow-md p-4">
          <ul className="list-none p-0">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between items-center py-2">
                <div>
                  <span className={task.completed ? 'line-through opacity-20' : ''}>{task.text}</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                    className="mr-2"
                  />
                  <button onClick={() => handleDeleteTask(task.id)} className="text-red-500">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tudo;
