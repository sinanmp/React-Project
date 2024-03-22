import {useState } from 'react'

function formComponent({loading}) {


  if(!loading){
    return (
      <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }


    let [name ,setName] = useState('')
    
    const handleChange = (event)=>{
       setName(event.target.value)
       console.log(name)
    }
    const setValue =(event) =>{
      document.getElementById('target').innerHTML =`Your Name is : ${name.toUpperCase()}`
    }
  return (
    <div className='text-pretty'>
      <h1 className='text-lg font-semibold font-mono mt-36 mb-0'>Enter your Name:</h1>
      <input className='border mt-5' type="text" id='inputBox'  onChange={handleChange} />
      <button onClick={setValue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded shadow ml-3">Click</button>
      <h2 id='target' className='text-xl font-bold font-mono mt-5' style={{color:'green'}}></h2>
    </div>
    
  )
}

export default formComponent
