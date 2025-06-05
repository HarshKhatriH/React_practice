async function getData() {
  const url = "http://localhost:3000/posts";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  }
    catch (error) {
    console.error(error.message);
  }
}
getData();