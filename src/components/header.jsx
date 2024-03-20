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
    <a href="">Tudo App</a>
    </div>
    <div>
    <a href="">Form</a>
    </div>
  </div>
  )
}



export default Header;
