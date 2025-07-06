import { useReducer } from "react"

const initState= {
    count:0
}

const reducer = (state,action) =>{

    switch(action.type){
        case "Increment" : 
                    return {...state, count: state.count+1}
    
        case "Decrement" : 
                    return {...state, count: state.count-1}

        case "Default" : 
                    return {...state}

}}

export default function IncAndDec()
{
    const[state,dispatch] = useReducer(reducer, initState);
    return(
        <div style={ {width:"100vw", display:"flex", justifyContent:"center"}}>
            <div style={{textAlign:"center", border:"2px solid green", width:"500px"}}>

                <h1>Increment & Decrement</h1>
                <p>Count = {state.count}</p>

                <div >
                    <button onClick={()=>{
                        dispatch({type:"Increment"})
                    }}>Increment</button>

                    <button onClick={() =>{
                        dispatch({type:"Decrement"})
                    }}>Decrement</button>
                </div>
            </div>
        </div>
    )
}