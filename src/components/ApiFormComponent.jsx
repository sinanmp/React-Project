import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ApiFormComponent({ data }) {
  // Check if data is null before accessing its properties
  if (!data) {
    return (
      <div className="flex justify-center items-center h-full mt-36">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='font-mono font-bold text-xl mt-11'>Person Details</h1>
      <div>
        <button className='border hover:bg-white bg-gray-500 text-gray-700 px-4 py-2 rounded-md'>
          <FaChevronLeft className='h-5 w-5 mr-2' /> Prev
        </button>
        <div> 
          <p>{data.name ? data.name : 'Company Name Not Available'}</p>
        </div>  
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
          Next <FaChevronRight className='h-5 w-5 ml-2' />
        </button>
      </div>
    </div>
  );
}

export default ApiFormComponent;
