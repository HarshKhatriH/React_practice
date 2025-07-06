import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Main()
{

  const[state,dispatch] =useContext(AppContext)
  return (
    <div>
       
       <h1>Counter = {state.count}</h1>

       <button onClick={()=>{
         dispatch({type:"Increment" , payload:10})
       }}>Increment</button>

       <button onClick={()=>{
         dispatch({type:"Decrement", payload:5})
       }}>Decrement</button>

       
    </div>
  )
}