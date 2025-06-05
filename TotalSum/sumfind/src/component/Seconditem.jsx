
export default function Firstitem({count_item2,setCountitem2})
{
    function countHandler(val)
    {
        setCountitem2(count_item2+val);
        console.log(setCountitem2);
    }

    return(
        <div >
            <div style={{display:"flex", width:"1000px", border:"1px solid black", gap:"5rem"}} >
                <p>Pineapple</p>
                <p>50 rs</p>
                <div style={{display:"flex", width:"200px", gap:"2rem"}}>

                    <button onClick={()=>{
                        countHandler(1);
                    }}
                    >+</button>

                    <p>Quan = {count_item2}</p>

                    <button  disabled={count_item2<=1} 
                            onClick={ () =>{countHandler(-1) } }  
                    >-</button>

                    <div style={{ border:"1px solid red"}}>
                        <p style={{width:"100px"}}>Total = {50*count_item2} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}