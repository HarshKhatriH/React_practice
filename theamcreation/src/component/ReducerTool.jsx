import { useReducer } from "react";


const initistate = {
    count: 0
}

const reducer = (state,action) => {
    switch(action.type)
    {
        case "increment" : 
                return {
                    ...state, count: state.count+1
                }
        case "decrement" : 
                return {
                    ...state, count: state.count-1
                }
        case"default" : 
                return {
                    ...state
                }
    }
}


export default function ReducerTool()
{

    const[state,dispatch] = useReducer(reducer, initistate);

    return (
        <div>
            <h1>Reducer Site</h1>
             <p>{state.count}</p>
                         <button onClick={()=>{
                dispatch({type:"increment"})
            }}>
                Increment
            </button>

            <button onClick={()=>{
                dispatch({type:"decrement"})
            }}            
            >Decrement</button>
        </div>
    )

}