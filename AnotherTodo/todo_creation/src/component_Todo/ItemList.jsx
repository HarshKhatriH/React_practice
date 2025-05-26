import ItemShow from "./ItemShow"

export default function ItemList({todo,setTodo,wholeTodo})

{
    return(
       
        <div>
             {
                console.log(wholeTodo)
// wholeTodo.map((item)=>{
//     return <div> {item.data}</div>
// })
        }
          <div>
             {
                todo.map((item)=>{
                    return  <ItemShow  singleItem={item}  setTodo={setTodo} wholeTodo={wholeTodo}/>;
                })
             }
          </div>
        </div>
    )
}