import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'


function Header(){

  return(
  <div className='flex justify-center gap-10 font-mono'>
    <div>
    <h5><Link to={'/Counter'}>Counter</Link></h5>
    </div>
    <div>
    <h5><Link to={'/TudoApp'}>Tudo App</Link></h5>
    </div>
    <div>
     <h5><Link to={'/Form'}>Form</Link></h5>
    </div>
  </div>
  )
}



export default Header;
