import { useState } from "react";

 export default function AddTodo({addTodoList})
 {
    const [text,setText] = useState("");
    function inputHandler(e)
    {
        setText(e.target.value);
    }

    return(
        <div>
            <div>
                Text === {text}
            </div>
            <div>
              <input placeholder="what you want to add"
                     onChange={inputHandler}
                     value={text} />
                     
            </div>

            <button onClick={() => {
                addTodoList(text);
            }}>
                ADD
            </button>

        </div>
    );
 }