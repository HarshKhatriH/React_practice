import { createContext, useReducer, useState } from "react";

export const creContext = createContext();

export default function ContextProvider({children})
{

    const[theme,setTheme] = useState("dark");

    function themeHandler()
    {
        setTheme((prev) => ((prev  === "dark"?"light":"dark")))
        // console.log("inside handle")
    }

    // const value = [theme,]

    return (
        <creContext.Provider value={[theme,themeHandler]}>
            {children}
        </creContext.Provider>
    )
}