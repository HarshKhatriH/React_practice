import { useState } from "react"
import { Link } from "react-router-dom"
import { allData } from "./data";


export default function User()
{
    // const id = [1,2,3,4];
    const [data,setData] = useState(allData);
    
    return (
        <div>
            {/* Inside user */}
            <div >
                {
                  data.map((item)=>{
                  return <div> <Link to={`/user/${item.id}`}>Go to page number == {item.id}</Link> </div>
                 })
                }

            </div>

           

        
              
            
        </div>
    )
}