import {useContext, useState }from 'react'
import Infocontext from '../context/Infocontext'

const secondPage = () => {
  const [name,setName] = useState("ravi")
  const{userName,setUserName} = useContext(Infocontext)
  return (
    <div>
        <input type="text" 
         placeholder="Enter a name..."
         onChange={(e)=>{setName(e.target.value)}}/>

        <button onClick={()=>setUserName(name)}>
        Submit</button>
    </div>
  )
}

export default secondPage
