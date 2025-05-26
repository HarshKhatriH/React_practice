
export default function TotalItem({singleData,setTodo,mainTodo})
{

//    function toggleHandler()
//    {
//      const orinalData = mainTodo.map((item)=>{
//         return !(item.id == singleData.id) ? 
//                   item
//                 : !(item.status)
//      })
   
//      setTodo(orinalData);
//     console.log("inside toggle");
//    }

   // -----------------------
    function toggleHandler()
   {
     const orinalData = mainTodo.map((item)=>{
        return item.id == singleData.id ? 
                  {...item,status: !item.status} 
                : item
     })
   
     setTodo(orinalData);

    console.log("inside toggle");
    // console.log(mainTodo);
   }


   
  return (
    <div style={{margin:"50px", 
                 display:"flex",
                 border: "1px solid red",
                 height: "50px",
                 gap:"2rem",
                }}>
        <div style={{border: "1px solid black",alignContent:"center"}}>{singleData.data}</div>
        <div style={{border: "1px solid black",alignContent:"center"}}>{singleData.id}</div>
        <div style={{border: "1px solid black",alignContent:"center"}}>
            {
              singleData.status?"Done":"Not Done"
            }</div>

        <div>
            <button onClick={()=>{
                toggleHandler();
            }} style={{height:"100%", border: "1px solid black"}}>Toggle effect</button>
        </div>
    </div>
  )   
}