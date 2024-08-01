import React, { useContext } from 'react'
import Infocontext from '../context/Infocontext'

const Contact = () => {
   const {userName} = useContext(Infocontext)
  return (
    <div>
       <h1>This is a contact page</h1>
       <h2>Name : {userName}</h2>

    </div>
  )
}

export default Contact
