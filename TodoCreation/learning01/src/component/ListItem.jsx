import TotalItem from "./TotalItem"

export default function ListItem({todoItem,setTodo,mainTodo})
{
    return(
        <div>
            {
                todoItem.map((item)=>{
                    return(
                        <TotalItem singleData={item} setTodo={setTodo} mainTodo={mainTodo} />
                    )})
            }
        </div>
    )
}