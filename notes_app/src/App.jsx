import React from "react"
import Home from './pages/Home'
import { Route,Routes } from "react-router-dom"
import Archive from "./pages/archive"
import Bin from "./pages/bin"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/bin" element={<Bin/>}/>
      </Routes>  
    </>
  )
}

export default App
