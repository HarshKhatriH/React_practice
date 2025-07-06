
  const url = "http://localhost:3003/data";

export default function Everyitem({item,fetchData})
{


    async function removeHandler(id)
    {
        await fetch ((`${url}/${id}`),{
        method:"DELETE",
       })
       .then((fetchData))
       .catch((err)=> {console.log(err)})
    //    console.log(response);
    }

    return(
        <tr >  
         {/* <div style={{display:"flex", gap:"2rem", border:"1px solid black", margin:"20px"}}> */}
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.course}</td>
            <td>{item.isChecked?"YES":"NO"}</td> 
            <td>{item.status ? "completed" : "Not Completed"}</td>
            <td><button onClick={()=>{
                removeHandler(item.id)
            }}>Remove</button></td>
            {/* <button>Remover</button> */}
         {/* </div> */}
         {/* </table> */}
        </tr>
    )
}