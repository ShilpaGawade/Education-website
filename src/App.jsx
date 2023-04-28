import React from "react"
import Courses from "./Components/Courses"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import  "./Style/style.css"



const App = () => {




  return (
  <>
    
 
  <BrowserRouter>
  
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/course" element={<Courses/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  </>
  )

}

export default App
