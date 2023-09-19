// // global execution context

// console.log("message");
// logger()
// console.log(1);

// // function execution context

// function logger() {
//   console.log(2);
//   console.log(3);
// }

async function getTodos() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await response.json()
  console.log(response);
  console.log(data);
}


getTodos();
