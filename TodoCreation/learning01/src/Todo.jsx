import { useState } from "react";
import AddTodo from "./component/AddTodo";
import ListItem from "./component/ListItem";

export default function Todo()
{
   const [todo,setTodo] = useState([]);
   
   function addTodoList(text)
   {
    setTodo((prev) => [
       ...todo,
       {
        data: text,
        status:false,
        id:text+Date.now(),
       }
    ], );
   }
     
   return(
    <div>
        <div>
            {
                todo.map((item)=> <li>{item.data}</li>)
            }
        </div>
        <div>
            <AddTodo addTodoList={addTodoList} />
        </div>
        <p>complete</p>
        <div>
            <ListItem 
            todoItem={todo.filter((filteData)=>filteData.status)}  setTodo={setTodo} 
            mainTodo={todo}
            /> </div>



        <p>Incomplete</p>

        <div>
            <ListItem 
            todoItem={todo.filter((filteData) => !(filteData.status)   )} 
            setTodo={setTodo}
            mainTodo={todo} />
        </div>

        

    </div>
    
   )
}