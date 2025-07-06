import { useContext } from "react"
import { Appcontex } from "../contextApi/Appcontext";

export default function Main()
{
    const[theme,themeChanger] = useContext(Appcontex);

    const x ={
        dark: {
            color:"blue",
            background:"yellow ",
            border: "2px solid red"
        },
        light: {
            color:"green",
            background:"red ",
            border: "2px solid black"
            
        }
    }
    console.log(x+"theme");

    return(
        <div>
            <h1 >
                Heading
            </h1>
            <h1 style={ x[theme]}>
                {
                    console.log(x[theme] + "==== inside h1")
                }
                inside Main Box 
                
            </h1>

            <button onClick={()=>{
                themeChanger()
            }}> theme changer
            </button>
        </div>
    )
}