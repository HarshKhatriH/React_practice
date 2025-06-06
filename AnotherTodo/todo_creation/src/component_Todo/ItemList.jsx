import ItemShow from "./ItemShow"

export default function ItemList({todo,setTodo,wholeTodo,getData})

{
    return(
       
        <div>
             {
                // console.log(getData)
// wholeTodo.map((item)=>{
//     return <div> {item.data}</div>
// })
        //   console.log(url)
          

        }
          <div>
             {
                todo.map((item)=>{
                    return  <ItemShow  singleItem={item}  setTodo={setTodo} wholeTodo={wholeTodo} getData={getData}/>;
                })
                
             }
          </div>
        </div>
    )
}