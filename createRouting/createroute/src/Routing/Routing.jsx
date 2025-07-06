import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Singleuser from "./Singeluser";

export default function Routing()
{
    
    return (
        <div >
            Inside Routing
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:id" element={<Singleuser />} />

                </Routes>
            </div>
        </div>
    )
}