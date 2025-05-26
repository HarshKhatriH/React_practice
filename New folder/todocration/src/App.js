import { useState } from "react";
import AddTodo from "./component/AddTodo";

export default function App()
{
  const [todo,setTodo] = useState([]);

  function handleTodoList(text)
  {
    setTodo((pre) => {
      return [
        ...todo,
        {
          data: text,
          id:text+Date.now(),
        },
      ];
    });
  }
  return(
    <div>
      Hii Harsh
      {console.log(todo)}
      <div>
        <AddTodo handleTodoList={handleTodoList} />
      </div>
      
    </div>
  );
}