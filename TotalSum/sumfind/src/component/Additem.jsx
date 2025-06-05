import { useState } from "react";
import Firstitem from "./Firstitem";
import Seconditem from "./Seconditem";

// import {count} from "./Firstitem"

export default function Additem()
{
    const[count,setCount] = useState(1);
    const[count_first,setCountfirst] = useState(1);

    
    return(
        <div>
            <div>
                <Firstitem count_item1={count}  setCount_item1={setCount} />
            </div>
            <div>
                <Seconditem count_item2={count_first} setCountitem2={setCountfirst}/>
            </div>
            <div>
                Total = {(30*count ) + (50*count_first) }
            </div>
        </div>
    )
}