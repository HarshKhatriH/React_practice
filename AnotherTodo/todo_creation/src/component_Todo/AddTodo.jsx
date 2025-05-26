import { useState } from "react";

export default function AddTodo({addHandler})
{

    const[item,setItem] = useState("");
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
                />
            </div>
            <div>
                <button onClick={() => {
                    addHandler(item);
                }}>Add</button>
            </div>
        </div>
    )
}