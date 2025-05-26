import Skillset from "./Skillset";

export default function Userlist({data})
{
    console.log(data,"daata");
    const {name,avatar_url,title,skillsets} = data;
    // console.log(item);
    return(
        <div  style={ 
            {
                
                display: "flex",
                gap:"10px",
                border: "1px solid black"

            }}>
            <h2>{name}</h2>
            <p> <img style={{
                width:"100px",
                height:"100px",
                
            }} src={avatar_url} alt="avatar" />
            </p>
            <p>{title}</p>
            <div>
                {
                    skillsets.map((item)=>{
                          return  <Skillset icon={item.icon}  desc={item.description} />
                    })
                }
            </div>

        </div>
    )
}