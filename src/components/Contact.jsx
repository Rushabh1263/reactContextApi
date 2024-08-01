import React, { useContext } from 'react'
import Infocontext from '../context/Infocontext'

const Contact = () => {
   const {userName} = useContext(Infocontext)
  return (
    <div>
       <h1>This is a contact page</h1>
       {
        userName.map((list)=>{
           <h1>{list}</h1>
        })
       }

    </div>
  )
}

export default Contact
