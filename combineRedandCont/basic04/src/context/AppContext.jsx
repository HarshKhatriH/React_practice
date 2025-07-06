import { createContext,  useReducer } from "react";

export const AppContext = createContext();

const initVal= {
    count:0
}

const reducer = (state,action) => {
    switch(action.type)
    {
        case "Increment": return {
                               ...state, count:state.count+ action.payload
        }
        case "Decrement": return {
                               ...state, count:state.count- action.payload
        }
        case "default": return {
                               ...state
        }
    }
}

export default function AppProvider({children})
{

    const[state, dispatch ] = useReducer(reducer, initVal);


    return <AppContext.Provider value={[state,dispatch]}>
        {children}
    </AppContext.Provider>
}