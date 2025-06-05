
// const url = "https://www.localhost:3000"

console.log("harshl");
async function getData() 
{

    try{
         const url = "http://localhost:3001";

        const response = await fetch(url);
         if (!response.ok) {
           throw new Error(`Response status: ${response.status}`);
         }
        const json = await response.json();
        console.log(json);
        console.log("i am here")

    }

    catch(err) 
    {
        console.log("error")
    }

    
}
getData();