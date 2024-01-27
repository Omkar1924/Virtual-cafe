import React from 'react'
import {Routes,BrowserRouter,Route } from 'react-router-dom';
import HomePage from './Component/HomePage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<HomePage/>} />
   
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App