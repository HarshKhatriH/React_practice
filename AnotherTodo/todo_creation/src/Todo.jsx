import {  useEffect, useState } from "react";
import AddTodo from "./component_Todo/AddTodo";
import ItemList from "./component_Todo/ItemList";
const url = "http://localhost:3002/todo";


export default function Todo()
{
   const[todo,setTodo] =useState([]);
   

  async function addHandler(item)
   {
     try {
      const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(
        {
            data:item,
            id:item+Date.now(),
            status:false
        }
      ),
      headers: {
        "Content-Type": "application/json",
      }
      
      }).then(getData());
      


    const result = await response.json();
    console.log("✅ Data added:", result);
    } catch (error) {
    console.error("❌ Error adding data:", error.message);
    }
}

     
    
    
    

    


//      setTodo((prev) => { return [...prev,
//         {
//             data:item,
//             id:item+Date.now(),
//             status:false
//         }
//    ]});
   

    async function getData() {

      await fetch (url)
        //    console.log(response);
            .then( async (res) => {
                  const data = await res.json();
                //   console.log(data)});
                  setTodo(data)})
            .catch((err)=> {console.log(err)});
    }

    useEffect(()=>{
        
      getData();
    },[])
           



//    useEffect(()=>{

// },[]);
    
    return (
        <div> 
            <div>
                {
                    todo.map((item)=>{
                        return <li>{item.data}</li>
                    })
                }
            </div>

            <div>
                <AddTodo addHandler={addHandler} />
            </div>

            <div>
                Completed Data
            </div>
            <div>
                <ItemList todo={todo.filter((item)=> item.status)} setTodo={setTodo} wholeTodo={todo} getData={getData} />
            </div>

            <div>
                InCompleted Data
            </div>
            <div>
                <ItemList todo={todo.filter((item) => !item.status)} setTodo={setTodo} wholeTodo={todo}/>
            </div>

            

            

        </div>
    )
}