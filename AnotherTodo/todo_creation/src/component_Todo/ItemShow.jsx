const url = "http://localhost:3002/todo";


export default function ItemShow({singleItem,setTodo,wholeTodo,getData})
{


   async function toggleHandler()
    {
   //   console.log(singleItem)

     try {
      const response = await fetch(`${url}/${singleItem.id}`, {
      method: "PATCH",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
         {
            status:!singleItem.status
         }
      ),
    })
     if (response.ok) {
      getData();
    } else {
      console.error("Failed to update status");
    }


  } catch (error) {
    console.error("Error patching todo:", error);
  }
}







      // console.log(wholeTodo)
   //     const updateData = wholeTodo.map((item)=> 
   //              { return !(item.id === singleItem.id) ?
   //                               item  :
   //                              {...item,status: !(item.status)}
   //  });
   //     setTodo(updateData);
    


   async  function removeHandler()
    {
      console.log("inside remove handler");
       try {
          const response = await fetch(`${url}/${singleItem.id}` , {
           method: "DELETE"
      });
      if (response.ok) {
      getData();
    } else {
      console.error("Failed to update status");
    }

   //  console.log(" Deleted successfully.");
    } catch (error) {
    console.error(" Error:", error.message);
  }
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
                  toggleHandler({singleItem});
                }} style={{height:"100%"}}>Toggle</button>
             </div>

             <div>
               <button onClick={() =>{
                  removeHandler({singleItem});
               }}>Remove</button>
             </div>
             {/* <div>
               {
                  console.log(singleItem.status)
               }
             </div> */}
        </div>
    )
}