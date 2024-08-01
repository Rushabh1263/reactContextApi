import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Infocontext from "./context/Infocontext"
import { useState } from "react"

import Home from "./components/Home"
import Contact from "./components/Contact"
import SecondPage from "./components/SecondPage"

import Navbar from "./components/Navbar"


function App() {
 

const[userName,setUserName] =useState([ "abc","cde"])
  return (
   <>
     {userName}

    {
       userName.map((list)=>{
           <h1>{list} </h1>
       })
     }
     
     {/* <Infocontext.Provider value={{userName,setUserName}}>
     <Router>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/secondPage" element={<SecondPage/>}/>
        </Routes>
     </Router>
     </Infocontext.Provider> */}
   </>
  )
}

export default App
