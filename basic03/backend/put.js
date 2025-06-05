const url = "http://localhost:3000/todo/1749049464752";  // Add ID in the URL

const updatedData = {
  id: 5,
//   name: "harsh khatri",  // changed name
  status: true           // changed status
};

const response = await fetch(url, {
  method: "PUT",
  body: JSON.stringify(updatedData),
  headers: {
    "Content-Type": "application/json",
  }
});

const result = await response.json();
console.log(result);
