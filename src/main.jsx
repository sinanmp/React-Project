import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
import './index.css'
import Header from './header'
let root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Header/>
    <CounterApp/>
  </React.StrictMode>,
)
