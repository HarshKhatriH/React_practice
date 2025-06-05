const url = "http://localhost:3000/todo";

// Data to be sent
const data = {
  name: "harsh khatri",
  status: false,
  id: Date.now() + Math.floor(Math.random() * 1000) // optional unique ID
};

// Async function to send POST request
async function addTodo() {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    const result = await response.json();
    console.log("✅ Data added:", result);
  } 
    catch (error) {
    console.error("❌ Error adding data:", error.message);
  }
}

// Call the function
addTodo();








// const url = "http://localhost:3000/todo";

// const data = {
//   name:"harsh",
//   status: false
//   // Date.now() + (Math.random() * 10).toString()
// }

// // console.log(data.id);


// const response = await fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   }
  
// });

// const result = await response.json();

// // console.log(result);
