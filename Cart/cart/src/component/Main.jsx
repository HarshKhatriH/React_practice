import { useState } from "react"
import Additem from "./Additem"

export default function Main()
{
    const[total,setTotal] = useState();
    const data =  [
        {
            itemName:"Mango",
            price:"50",
        },
        {
            itemName:"Guava",
            price:"30",
        },
        {
            itemName:"Papaya",
            price:"20",
        },
        {
            itemName:"Apple",
            price:"20",
        },]
    
    
    
    
    return(
        <div>  
            <div> HII
                {
                    data.map((item)=>{
                        return <Additem item={item.itemName} rate={item.price} total={total} setTotal={setTotal}/>
                    })
                }
            </div>
            <div>
                Total == {total}
            </div>
            
        </div>
    )
}