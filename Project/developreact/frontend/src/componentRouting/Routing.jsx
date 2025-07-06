import {Route, Routes} from 'react-router-dom'
import User from './User'
import Home from './Home'
import About from './About'
import Singleuser from './Singleuser'
export default function ()
{
    return (
      
        <div>
            <Routes>
                <Route path='/' element= {<Home />}></Route>
                <Route path='/user' element={<User />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:id' element={<Singleuser />}></Route>

            </Routes>
        </div>
    )
}