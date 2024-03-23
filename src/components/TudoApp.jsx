import React from 'react'

function TudoApp({Success,isVisible,tasks,handleDeleteTask,handleToggleComplete,manageBoxes,addNewTask}) {
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
  <div className="max-h-64 bg-slate-300 rounded-lg shadow-md p-4">
    <ul className="list-none p-0">
      {tasks.map(task => (
        <li key={task._id} className="flex justify-between items-center py-2">
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-normal break-words">
              <span className={task.checked ? 'line-through opacity-20' : ''}>{task.text}</span>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleToggleComplete(task._id)}
              className="mr-2"
            />
            <button onClick={() => handleDeleteTask(task._id)} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>






  </div>
  )
}

export default TudoApp
