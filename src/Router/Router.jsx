import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Counter from '../pages/Counter'
import TudoApp from '../pages/Tudo'
import Form from '../pages/FormPage'
import Api from '../pages/ApiForm'

function Router() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Counter/>}></Route> 
      <Route path='/Counter' element={<Counter/>}></Route> 
      <Route path='/TudoApp' element={<TudoApp/>}></Route> 
      <Route path='/Form' element={<Form/>}></Route> 
      <Route path='/Api' element={<Api/>}></Route> 
      </Routes>
    </div>
  )
}

export default Router
