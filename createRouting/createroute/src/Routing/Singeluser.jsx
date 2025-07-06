import { Link, useParams } from "react-router-dom"
import { allData } from "./data";


export default function Singleuser()
{
    const obj = useParams();
    // console.log(obj)
    var obj2 = allData.filter((item) => { return obj.id == item.id })[0]
    // console.log(arr[0] , "hg")
    // var obj2 = arr[0]

    // for(var i=0; i<allData.length; i++)
    // {
    //     console.log(i)
    //  if( obj.id == allData[i].id)
    //  {
    //    obj2 = (allData[i]);
    //    break;

    //  }
    // }
    
    
    // console.log(obj);
    
    return (
        <div>
            Inside SingleUser
            <p>{obj2.name}</p>
            <p>{obj2.id}</p>
            <p>{obj2.description}</p>

            <Link to={"/user"}>Go Back</Link>

            
            

        </div>
    )
}