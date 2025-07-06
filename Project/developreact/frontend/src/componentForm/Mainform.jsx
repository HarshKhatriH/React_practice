import { useState } from "react";

const details = {
    Uname:"",
    age:0,
    gender:"",
    courses:"",
    married: false,
    mode: ""
}


export default function Mainform()
{

    const[data,setInitData] = useState(details);
    // console.log(data)

    function submitHandler(e)
    {
        e.preventDefault();
        console.log(data)
    }

    function changeHandler(e)
    {
        const{name,value,type,checked} = e.target;
        // // console.log(e.target.value)
        // setInitData((prev) => {return  {...prev, [name]:value}})
        // console.log("Name = " , name , "value = ", value)
        // console.log(e)  
        const updatedData = type == "checkbox"?checked:value

        setInitData((prev)=>{
            return {
                ...prev, [name]:updatedData
            }
        })

    }

    return (
        <div>
            {/* inside Mainform */}

            <form onSubmit={submitHandler} style={{border:"5px solid green", width:"500px", textAlign:"center",margin:"50px", height:"300px"}}>
                <div>
                    <label> Enter Name</label>
                    <input type="text"
                           placeholder="your name"
                           value={data.Uname}
                           name="Uname"
                           onChange={changeHandler}
                     ></input>
                </div>

                <div>
                    <label> Enter age</label>
                    <input type="number"
                           placeholder="your age"
                           name="age"
                           value={data.age}
                           onChange={changeHandler}
                     ></input>
                </div>

                <div>
                    <label>Select your Gender</label>
                    <select name="gender" onChange={changeHandler} value={data.gender}>
                            <option hidden>Choose your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                    </select>
                </div>

                <div>
                    <label>Select your Courses</label>
                    <select name="courses" onChange={changeHandler} value={data.courses}>
                            <option hidden>Select One</option>
                            <option>Cloud Computin</option>
                            <option>Web Development</option>
                            <option>Data Science</option>
                    </select>
                </div>

                <div>
                    <label> Are You Married</label>
                    <input type="checkbox"
                           name="married"
                           value={data.married}
                           onChange={changeHandler}
                     ></input>
                </div>

                <div>
                    <label>Status</label><br></br>
                    <label>Online</label>
                    <input type="radio"
                           name="mode"
                           value="online"
                           onChange={changeHandler}
                     ></input>
                     <label>Offline</label>
                    <input type="radio"
                            name="mode"
                           value="offline"
                           onChange={changeHandler}
                     ></input>
                </div>

              


                <div>
                    
                    <input type="submit"
                           placeholder="Submit"
                     ></input>
                </div>
            </form>
        </div>
    )
}