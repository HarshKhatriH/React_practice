import { useEffect, useState } from "react"
import Showlist from "./Showlist";
// import { data } from "./data";

const url = "http://localhost:3003/data";

// const initDetails = [{
//     id:Date.Now,
//     name:"",
//     age:Number,
//     email:"",
//     gender:"",
//     course:"",
//     isChecked: Boolean

// }
// ]

export default function Listform()
{
    const [details,setDetails] = useState([])
    const [data,setData] = useState([])


async function addItem(e) {
        e.preventDefault();


    await fetch((url),{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            id:Date.Now,
            name:details.name,
            age:details.age,
            email:details.email,
            gender:details.gender,
            course:details.course,
            isChecked: details.isChecked,
            status:true

        })
    })
    .then(fetchData)
    .catch((err) => {console.log(err)})
    
}






async function fetchData()  
{
     await fetch(url)
    .then(async(res) => {
        const datapoint =  await res.json();
        // setDetails((prev) =>{return {...prev,datapoint}})
        setData(datapoint)

        // console.log(datapoint);
        


    })
    .catch((err) => {
        console.log(err)
    })
        // console.log(setDetails);

}

// fetchData();
useEffect(()=>{
    fetchData();
    // console.log(details);

},[])


    // function submitHandler(e)
    // {
    //     e.preventDefault();
    //     // console.log(details)
    // }

    

    function changeHandler (e)
    {
        const{name,value,type,checked} = e.target;
        const updateData = type === "checkbox" ? checked : value
        setDetails((prev) =>{ return { ...prev, [name] : updateData}})
        // console.log(setDetails);
    
    }


    return (<div>
        {/* Inside Listform */}

        
        
        <form onSubmit={addItem} style={{border:"1px solid black", textAlign:"center"}}>
            <div>
                <label>Enter Name = </label>
                <input type="text"
                       name="name"
                       placeholder="Your Name"
                       onChange={changeHandler}
                       value={details.name} 
                    ></input>
            </div>

            <div>
                <label> Email = </label>
                <input type="email"
                       name="email"
                       placeholder="XYZ@gmail.com"
                       onChange={changeHandler} 
                       value={details.email}
                    ></input>
            </div>

            <div>
                <label>Age = </label>
                <input type="number"
                       name="age"
                    //    placeholder="Enter Your age"
                       onChange={changeHandler} 
                       value={details.age}
                    ></input>
            </div>

            <div>
                <label>Select Your Gender</label>
                <select name="gender" onChange={changeHandler}>
                    <option hidden>Choose Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </select>
            </div>

            <div>
                <label>Select Your Course</label>
                <select name="course" onChange={changeHandler}>
                    <option hidden>Choose One</option>
                    <option>Web Devlopment</option>
                    <option>Cloud Computing</option>
                    <option> Data Analytics</option>
                </select>
            </div>

            <div>
                <label>Are You Married</label>
                <input type="checkbox"
                       onChange={changeHandler} 
                       name="isChecked"
                    ></input>
            </div>
           

            <button>Submit</button>
        </form>

        
        

        <Showlist data={data} fetchData={fetchData}/>

    </div>)
}