import React,{useState} from 'react'

function Tudo() {
  const [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 500);

  if(!loading){
    return (
      <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='font-extrabold text-4xl mt-24'>Tudo App</h1>
    </div>
  )
}

export default Tudo
