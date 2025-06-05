import {  useState } from "react";
import AddTodo from "./component_Todo/AddTodo";
import ItemList from "./component_Todo/ItemList";

export default function Todo()
{
   const[todo,setTodo] =useState([]);
   function addHandler(item)
   {
     setTodo((prev) => { return [...prev,
        {
            data:item,
            id:item+Date.now(),
            status:false
        }
   ]});
   }

//    useEffect(()=>{

// },[]);
    
    return (
        <div> 
            <div>
                {
                    todo.map((item)=>{
                        return <li>{item.data}</li>
                    })
                }
            </div>

            <div>
                <AddTodo addHandler={addHandler} />
            </div>

            <div>
                Completed Data
            </div>
            <div>
                <ItemList todo={todo.filter((item)=> item.status)} setTodo={setTodo} wholeTodo={todo}/>
            </div>

            <div>
                InCompleted Data
            </div>
            <div>
                <ItemList todo={todo.filter((item) => !item.status)} setTodo={setTodo} wholeTodo={todo}/>
            </div>

            

            

        </div>
    )
}