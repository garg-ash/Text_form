import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Textform from './component/Textform'
import About from './component/About'
import Alert from './component/Alert'
import Router, { Route, BrowserRouter } from 'router'

function Sum() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = ()=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode has been enabled : Success")
    } else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled : Success")
    }
  }
  
  return (
    <>
     <Router>

     <Navbar title="TestUtils" />
      <Alert alert = {alert}/>
      <div className="container">
        <BrowserRouter>
        <Route path = "/about">
        <About/>
        </Route>
        <Route path = "/">
        <Textform showAlert = {showAlert} mode = {mode}/>
        </Route>
          
        </BrowserRouter>
      </div>
     </Router>
    </>
  )
}

export default Sum
