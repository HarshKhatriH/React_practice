import Everyitem from "./Everyitem"
import "./Showlist.css"


export default function Showlist({data,fetchData})
{
    return (
    <div style={{textAlign:"center"}}>
        <table>
            <thead>
            <tr >
                   <th>ID</th>
                   <th>NAME</th>
                   <th>AGE</th>
                   <th>EMAIL</th>
                   <th>GENDER</th>
                   <th>COURSE</th>
                   <th>STATUS</th>
                   <th>ISCOMPLETED</th>
            </tr>
            </thead>

            <tbody style={{border:"1px solid black", }}>
                { 
                  data.map((item)=> 
                   <Everyitem  item={item} fetchData={fetchData}/> 
                )}
            </tbody>


        </table>
       


    </div>)
}













