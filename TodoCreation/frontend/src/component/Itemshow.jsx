import ItemList from "./Itemlist"

export default function Itemshow({todo1,getData,url})
{
    // {
    //                     console.log("insdie itemshow" + todo1)
    //                     }

    return(
        <div>
            {
                todo1.map((item)=>{
                    return (<ItemList  item1={item} getData={getData} url={url}/>)
                    // (<div>{
                    //     console.log("insdie itemshow" + todo1)
                    //     }
                    //     </div>)
                })
                
                // console.log(todo1 + " inside itemshow ")
                
            }

        </div>
    )
}