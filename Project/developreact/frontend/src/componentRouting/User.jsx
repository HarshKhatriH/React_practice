import { useState } from "react"
import { details } from "./data"
import { Link } from "react-router-dom";

export default function User()
{
    const[data, setData] = useState(details);
    // console.log(data)
    return (
        <div>
            {/* Inside User */}
            <div style={{textAlign:"center"}}>
                {
                data.map((item) => {
                    return <div> <Link to={`/user/${item.id}`}>Go to Page == {item.id}</Link> </div>
                })
            }


            </div>


            
        </div>
    )
}