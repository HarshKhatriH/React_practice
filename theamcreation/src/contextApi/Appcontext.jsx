import {  createContext, useState } from "react";

export const Appcontex = createContext();

export default function AppContextProvider({children})
{

   const[theme,setTheme] =useState("dark");

   function themeChanger()
   {
     setTheme((prev)=> 
    
        (prev === "dark" ?"light":"dark")
        // console.log(prev)
    );
    //  console.log(prev)
   }

   const value = [theme,themeChanger]

   console.log("inside app")

    return (<Appcontex.Provider value={value}>
        {children}
    </Appcontex.Provider>);
}