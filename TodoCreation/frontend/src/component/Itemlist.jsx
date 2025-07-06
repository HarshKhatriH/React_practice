export default function ItemList({item1,getData,url})
{
    // console.log(item1+"inside list");

    async function toggleHandler(item1) {

        await fetch (`${url}/${item1.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                status:!item1.status
            })
        }).then(getData())
        .catch((err) =>{console.log(err)})     
    }


    async function removeDataHandler()
    {
        await fetch (`${url}/${item1.id}`  ,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            // body:JSON.stringify()
        }).then(getData())
        .catch((err) => {console.log("Inside Remover : " + err)})
    }



    return(
        <div style={{display:'flex', justifyContent:"center"}}>
            <div style={{display:'flex', justifyContent:"center", gap:"2rem", margin:"20px", border:"1px solid black", width:"800px"}}>
                <p>
                  {item1.name}
                </p>

                <button>
                  {item1.status?"Done":"Not Done"}
                </button>

                <p>
                    {item1.id}
                </p>

                <button onClick={()=>{
                    toggleHandler(item1); 
                }}>
                    Toogle
                </button>

                <button onClick={() =>{
                    removeDataHandler(item1)
                }}> Remove
                </button>
            </div>

        </div>
    )
}