import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ApiFormComponent({ data ,manageCount}) {
  // Check if data is null before accessing its properties
  if (!data) {

    return (
      <div>
      <button onClick={()=>{manageCount('+')}} className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md">
        Click For Start
      </button>
        <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      </div>
     
    );
  }

  return (
    <div>
      <h1 className='font-mono text-white font-bold text-xl mt-11'>Person Details:</h1>
      <div className="mt-4">
        <div className="mb-2">
          <p className="font-semibold">Name:</p>
          <p>{data.name}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold">Email:</p>
          <p>{data.email}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold">Address:</p>
          <p>{data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold">Phone:</p>
          <p>{data.phone}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold">Company:</p>
          <p>{data.company.name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button onClick={()=>{manageCount('-')}} className='border hover:bg-white bg-gray-500 text-gray-700 px-4 py-2 rounded-md'>
          <FaChevronLeft className='h-5 w-5 mr-2' /> Prev
        </button>
        <button onClick={()=>{manageCount('+')}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2'>
          Next <FaChevronRight className='h-5 w-5 ml-2' />
        </button>
      </div>
    </div>
  );
}

export default ApiFormComponent;
