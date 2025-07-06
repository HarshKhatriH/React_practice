import { useEffect, useState } from 'react';
import './App.css'
import Addingtodo from './component/Addingtodo';
import Itemshow from './component/Itemshow';

const url= "http://localhost:3003/todo";

export default function App() 
{

  const [todo,setTodo]= useState([]);


  async function addHandler(item) {

     await fetch (url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
            },
      body:JSON.stringify({
        name:item,
        status:false,
        id:Date.now(),
      })
    }).then(getData())
    // const data = await response.json();
    // console.log(item);

    .catch((err) => {console.log(err)})

    // setIte
  }


  async function getData(){

    await fetch (url)
     .then(async(res)=>{
         const datapost = ( await res.json())
        //  console.log(data);
         setTodo(datapost);
    //  console.log(todo);


     })
     .catch((error)=> {
      console.log("inside fetch = ",error)
     })

     

    
  }
  useEffect(()=>{
    getData();  

  },[])


  

  return (
    <div className="App">

      <div>
        {
          todo.map((item) => {
                return<li>{item.name}</li>
          })
        }
      </div>

      <div>
       <Addingtodo addHandler={addHandler}/>
      </div>

      <h1>INcomplete</h1>
      {/* .filter((x) => x.status) */}

      <div>
        < Itemshow todo1={todo.filter((x)=> !(x.status) )}
              getData={getData} 
              url={url}/>
      </div>

      <h1>Complete</h1>

      <div>
        <Itemshow todo1={todo.filter((x)=>(x.status))} getData={getData} url={url}/>
      </div>


    </div>
  );
}

