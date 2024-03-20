import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Counter from '../pages/Counter'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Counter' element={<Counter/>}></Route> 
      </Routes>
    </div>
  )
}

export default Router
