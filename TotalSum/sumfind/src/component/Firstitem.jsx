
export default function Firstitem({count_item1,setCount_item1})
{
    function countHandler(val)
    {
        setCount_item1(count_item1+val);
    }

    return(
        <div >
            <div style={{display:"flex", width:"1000px", border:"1px solid black", gap:"5rem"}} >
                <p>Mango</p>
                <p>30 rs</p>
                <div style={{display:"flex", width:"200px", gap:"2rem"}}>

                    <button onClick={()=>{
                        countHandler(1);
                    }}
                    >+</button>

                    <p style={{width:"150px"}}>Quan = {count_item1}</p>

                    <button  disabled={count_item1<=1} 
                            onClick={ () =>{countHandler(-1) } }  
                    >-</button>

                    <div style={{ border:"1px solid red"}}>
                        <p style={{width:"100px"}}>Totoal = {30*count_item1} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}