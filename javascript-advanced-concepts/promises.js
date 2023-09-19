// global execution context

console.log("message");
logger()
console.log(1);



// function execution context 

function logger() {
  console.log(2);
  console.log(3);
}
