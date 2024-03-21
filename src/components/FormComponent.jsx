import {useState } from 'react'

function formComponent() {
    let [name ,setName] = useState('')
    
    const handleChange = (event)=>{
       setName(event.target.value)
       console.log(name)
    }
    const setValue =(event) =>{
      document.getElementById('target').innerHTML = name.toUpperCase()
    }
  return (
    <div className=''>
      <input className='border mt-32' type="text" id='inputBox'  onChange={handleChange} />
      <button onClick={setValue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded shadow ml-3">Click</button>
      <h2 id='target' className='text-xl font-bold mt-5' style={{color:'black'}}></h2>
    </div>
    
  )
}

export default formComponent
