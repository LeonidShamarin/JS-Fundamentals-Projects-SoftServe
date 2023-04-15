 //https://jsonplaceholder.typicode.com/ -Free fake API for testing and prototyping.
  //відправляєм на сервер запит який далі буде оброблятись на бекенді
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name: "Alex" }),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));