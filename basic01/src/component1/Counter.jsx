import { useState } from "react";



export default function Counter ()
{
    const [Count,setCount] = useState(0);

    function HandleCount(val)
   {
      setCount ( Count+val);
   }

  return (
    <div>
        harsh
        <p>{Count}</p>
        <button onClick={()=> HandleCount(1)}>increment</button>
        <button onClick={()=> HandleCount(-1)}>Decrement</button>

    </div>
  )

}