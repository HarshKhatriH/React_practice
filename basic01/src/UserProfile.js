import { useState } from "react";
import Userlist from "./component/Userlist";

let UserDetails = 
    [
        {
            name: "harsh",
            avatar_url: "https://cdn.britannica.com/91/267391-050-9025A36D/indian-actor-akshay-kumar-red-sea-international-film-festival-december-2022.jpg",
            title: "Software Engineer",
            skillsets: 
            [
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "react"
                },
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "java"
                }

            ]
        },
        {
            name: "Khatri",
            avatar_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Akshay_Kumar_National_Award_for_Padman_%28cropped%29.jpg",
            title: "Machine Engineer",
            skillsets: 
            [
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "react"
                },
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "java"
                }


            ]
        },
        {
            name: "mannu",
            avatar_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Akshay_Kumar_National_Award_for_Padman_%28cropped%29.jpg",
            title: "WEb Engineer",
            skillsets: 
            [
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "react"
                },
                {
                    icon:"https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
                    description: "java"
                }


            ]
        },


    ];

function UserProfile()
{
    
    
    const [data,setData] = useState(UserDetails);
    console.log(data);

    return(
        <div>
            {
                data.map((item)=>{
                    return <Userlist data={item} />
                })
            }
        </div>

    )
}

export default UserProfile;