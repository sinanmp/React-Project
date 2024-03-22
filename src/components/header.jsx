import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'


function Header(){

  return(
  <div className='flex justify-center mt-3 gap-4 font-mono'>
    <div>
    <h5><Link to={'/Counter'}>COUNTER</Link></h5>
    </div>
    <div>
    <h5><Link to={'/TudoApp'}>TUDOAPP</Link></h5>
    </div>
    <div>
     <h5><Link to={'/Form'}>FORM</Link></h5>
    </div>
    <div>
     <h5><Link to={'/api'}>API</Link></h5>
    </div>
  </div>
  )
}



export default Header;
