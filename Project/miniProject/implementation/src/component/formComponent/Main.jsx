import './Main.css';

export default function Main()
{
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
                <form style={{width:"500px", border:"1px solid black", padding:"20px 30px 20px 30px"}}>

                    <div>
                        <label>First name</label> 
                        <br/>
                        <input className="inputColor"
                           type="text"
                           placeholder="First Name">
                         </input>
                    </div>

                    <div>
                        <label>last name</label> 
                        <br/>
                        <input className="inputColor"
                           type="text"
                           placeholder="Last Name">
                         </input>
                    </div>

                    <div>
                        <label>Email Address</label> 
                        <br/>
                        <input className="inputColor"
                           type="email"
                           placeholder="abc@gmail.com">
                         </input>
                    </div>

                    <div>
                        <label>Country</label> 
                        <br/>
                        <input className="inputColor"
                           type="email"
                           placeholder="County Name">
                         </input>
                    </div>

                    <div>
                        <label>Address</label> 
                        <br/>
                        <input className="inputColor"
                           type="email"
                           placeholder="Address">
                         </input>
                    </div>

                    <div>
                        <label >Gender</label> 
                        <br/>
                        <input className="inputColor"
                           type="radio"
                        >
                         </input>
                    </div>

                    

                    

                </form>
        </div>
    )
}