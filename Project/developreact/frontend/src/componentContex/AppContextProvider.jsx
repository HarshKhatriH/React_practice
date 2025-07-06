import { createContext, useState } from "react";

export const AppContex = createContext();

export default function AppContextProvider({children})
{

    const[theme,setTheme] = useState("dark");

    function addTheme()
    {
        setTheme((prev) =>
           ( prev === "dark" ? "light" : "dark")
        // {console.log(prev)}
        )
        // console.log("indie add")
    }

   const value = [theme,addTheme]

    return (
       <AppContex.Provider value={value}>
        {children }
       </AppContex.Provider>)
}