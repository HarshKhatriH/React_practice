import {  NavLink } from "react-router-dom";

export default function Alldetails()
{
    

    const allLink = [
        {
            data:"/",
            title:"Home",
        },
        {
            data:"/user",
            title:"user",

        },
        {
            data:"/about",
            title:"about",

        },
        

    ];

    const allStyle = {
        active:{
            background:"red",
            borderRadius:"1rem"


        },
        not_active:{
            background:"white",
        },
    };

   
    
    return (
        <div style={{display:"flex", justifyContent:"space-evenly", border:"1px solid black",fontSize:"25px"}}>
            
                {
                allLink.map((item)=>(
                 
                    <NavLink style={(props)=>{
                       return props.isActive ? allStyle.active : allStyle.not_active
                       
                    }}
                    to={item.data}>{item.title}</NavLink>

                ))
             }


            
           

        </div>
    )
}