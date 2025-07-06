import {  useContext } from "react";
import { creContext } from "../context/ContextProvider";

export default function Dchange()
{
    const[theme,themeHandler] = useContext(creContext);

    const style = {
        dark:{
            color:"red",
            background:"yellow",
            border:"1px solid black"
        },
        light:{
            color:"blur",
            background:"pink",
            border:"1px solid green"
        }
    }




    return(
        <div>
            <h1>
                Heading
            </h1>

            <p style={style[theme]}>
                this is inside
            </p>

            <button onClick={() => {
                themeHandler();
            }} > 
                changer
            </button>

        </div>
    )
}