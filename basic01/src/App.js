import { useState } from "react";
import userX from "./demo";

function App()
{

  const [count,setCount] = useState(0);

  function handleCounter(val)
  {
    setCount(count+val);
  }
  return (
    <div >
        <h2>{count}</h2>

        <button onClick={() =>
          {handleCounter(1)}
        }>increment</button>

        <button onClick={() =>
          {handleCounter(-1)}
        }>Decrement</button>
    </div>     
    
    

    );
  }


export default App;

