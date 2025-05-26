import { useState } from "react";

export default function AddTodo({handleTodoList})
{

    const [text,setText] = useState("");
    function handleChange(e) 
    {
        setText(e.target.value);
    }

    return(
        <div>
            <p> TEXT = {text}</p>
            <div>
                <input placeholder="what you want to add"
                       value= {text}
                       onChange={handleChange} />
            </div>
            <div>
                <button onClick ={() => {
                    handleTodoList(text);
                }} >
                    Add
                </button>
            </div>
        </div>
    );
}