// import { useState } from "react";

import { useEffect, useRef, useState } from "react";



export default function Addingtodo({addHandler})
{

    const[item,setItem] = useState([]);
    const ref = useRef(null);
    // const  ref1 = useRef(null)

function textHandler(e)
{
    // console.log("inside addHandler");
    
    setItem(e.target.value);
    // console.log(setItem);
}

useEffect(()=>{
    ref.current.focus();
    
},[])

function addEnter(e)
{
    if(e.charCode === 13)
    {
        addHandler(item,setItem)
        // ref.current.focus()
        setItem([])
        
    }

}



    return (
        <div>
            <h1>Heading</h1>
            <input onChange={textHandler}
                   type="text"
                   placeholder="what you want"
                   value={item}
                   ref={ref}
                   onKeyPress={addEnter}
                   
           />

           <div>
              <button 
            //   ref={ref1}
              onClick={()=>{
                addHandler(item,setItem)
                // .then((prev)=>{console.log(setItem)})
                // setItem((prev) => [])
                
                }}>
               Add Todo
           </button>

           </div>

           
        </div>
    )
}