import { NavLink } from "react-router-dom"

const linkPath = [
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/user",
        title:"User"
    },
    {
        to:"/about",
        title:"About"
    },
]

const style = {
    active:{
        background:"skyblue",
        // border-radius: "30px",
        // fontSize:"50px"
        borderRadius:"0.3rem"
        
    },
    pending:{
        background:"white"
    }
}
// console.log(linkPath)
export default function Alllink()
{
    return(
        <div>
            <div style={{display:"flex", justifyContent:"space-between",fontSize:"25px", border:"1px solid black"}}>
                {
                    linkPath.map((item)=>{
                        return <NavLink style={(props) =>( props.isActive? style.active : style.pending)}
                         to={item.to}> {item.title}</NavLink>
                    })
                }
            </div>

        </div>
    )
}