import { useEffect, useRef, useState } from "react";

export default function AddTodo({addHandler})
{

    const[item,setItem] = useState("");
    const x = useRef(null);

     useEffect(()=>{
        x.current.focus();
        console.log("inside");
    },[])
   

    function addTodoItem(e)
    {
        setItem(e.target.value);
    }

    


    return(
        <div>
            <div> TEXT =  {item}</div>
            <div>
                <input  placeholder="something here"
                        onChange={addTodoItem}
                        value={item}   
                        ref={x}       
                />
            </div>
            <div>
                <button  onClick={() => {
                    addHandler(item);
                    // x.current.focus();
                }}>Add</button>
            </div>
        </div>
    )
}