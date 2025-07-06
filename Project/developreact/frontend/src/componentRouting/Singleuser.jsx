import { Link, useParams } from "react-router-dom"
import { details } from "./data";

export default function Singleuser()
{


    const obj = useParams();
    // console.log(obj)

    const obj2 = details.filter((item)=> (item.id == obj.id))[0]
    // console.log(arr)
    

    return (
        <div>
            {/* Inside singleuser */}

            <div style={{textAlign:"center"}}>
                <p>{obj2.id}</p>
                <p>{obj2.name}</p>
                <p>{obj2.description}</p>

                <div>
                    <Link to={"/user"}>Previous</Link>
                </div>

            </div>

        </div>
    )
}