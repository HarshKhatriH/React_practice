export default function ItemShow({singleItem,setTodo,wholeTodo})
{

    function toggleHandler(wholeTodo)
    {
      // console.log(wholeTodo)
       const updateData = wholeTodo.map((item)=> 
                { return !(item.id == singleItem.id) ?
                                 item  :
                                {...item,status: !(item.status)}
    });
       setTodo(updateData);
    }
    return(
        <div style={{
            display:"flex", 
            width: "500px",
            height: "50px",
            border: "1px solid red",
            gap:"1.5rem"
        }}>
             <div style={{alignContent:"center",border:"1px solid black"}}>
                {singleItem.data}
             </div>
             <div style={{alignContent:"center",border:"1px solid black"}}>
                {singleItem.id}
             </div>
             <div style={{alignContent:"center",border:"1px solid black"}}>
                {singleItem.status?"Done":"Not Done"}
             </div>
             <div>
                <button onClick={() => {
                  toggleHandler(wholeTodo);
                }} style={{height:"100%"}}>Toggle</button>
             </div>
        </div>
    )
}