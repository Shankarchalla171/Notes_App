import React from "react"
import Home from './pages/Home'
import { Route,Routes } from "react-router-dom"
import Archive from "./pages/archive"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
      </Routes>  
    </>
  )
}

export default App
