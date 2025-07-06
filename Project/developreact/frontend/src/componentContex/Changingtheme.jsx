import { useContext } from "react"
import { AppContex } from "./AppContextProvider"

export default function Changingtheme()
{

    // call all props with help of useContext
    const [theme,addTheme] = useContext(AppContex);

    const style = {
        dark: {
            background:"green",
            border:"1px solid red"
        },
        light:{
            background:"skyblue",
            border:"1px solid black"


        }
    }


    return (
        <div style={{display:"flex", justifyContent:"center"}}>

            <div style={{fontSize:"25px", width:"500px",textAlign:"center"}}>
                <h1>Familiar with Use context</h1>
                <div style={style[theme]}>
                    Inside Box
                </div>

                <div style={{margin:"2rem"}}>
                       <button    onClick={() => {addTheme()}} >
                          Changer
                      </button>
                </div>

            </div>
          
           
        </div>
    )
}