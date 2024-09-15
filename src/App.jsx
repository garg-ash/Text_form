// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Textform from './component/Textform'
import About from './component/About'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Textform/>}/>
        <Route path='/about' element ={<About/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
