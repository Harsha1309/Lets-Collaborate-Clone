import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AI_RPA from './components/AI_RPA'
import Bolder from './components/Bolder'
import Innovate from './components/Innovate'
import Embrace from './components/Embrace'
import Touch from './components/Touch'

const App = () => {
  return (
    <>
    <div className="padding">
      <Navbar/>   
      <AI_RPA/>
      <Bolder/>
      <Innovate/>
      <Embrace/>
      <Touch/>
    </div>
    <hr style={{height:'3px',backgroundColor: 'black'}} />
    </>
  )
}

export default App