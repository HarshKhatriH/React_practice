import { useState } from "react";
export default function Additem({item,rate,total,setTotal})
{
    const[count,setCount] = useState(0);
    function countHandler(val)
    {
        setCount(count+val);
        setTotal( total+(rate*val));

    }

    return(
        <div >
            <div style={{display:"flex", width:"1000px", border:"1px solid black", gap:"5rem"}} >
                <p>{item}</p>
                <p>{rate}</p>
                <div style={{display:"flex", width:"200px", gap:"2rem"}}>

                    <button onClick={()=>{
                        countHandler(1);
                    }}
                    >+</button>

                    <p style={{width:"150px"}}>Quan = {count}</p>

                    <button  disabled={count<=0} 
                            onClick={ () =>{countHandler(-1) } }  
                    >-</button>

                    <div style={{ border:"1px solid red"}}>
                        <p style={{width:"100px"}}>Totoal = {rate*count} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}