// let game  = 'Sonic'; //global variable
			// console.log(game);

			// function title() {
			//   console.log(`${game}`);
			// }

			// function a() {
			// 	let game = "Sonic"; //local variable - functional scope (created inside of a function)
			// 	console.log(game);
			// }

			// a();

			// if (true) {
			// 	let game = "Mario";
			// 	console.log(game);
			// }

      // function hello() {
      //   var greeting = 'hello';
      // }

      
      // if (true) {
      //   let greeting = 'hello'; // using let and const ensure scop remains accurate
      // }
      
      // console.log(greeting);


      // let x = 10;
      // console.log(x); // shows 10

      // if (true) {
      //   let x = 2;
      //   console.log(x); // shows 2
      // }

      // console.log(x); // shows 10

      // ///////// TASKS /////////
      // function logIt() {
      //   let firstName = 'John'
      //   let lastName = 'Smith'
      //   let age = 25;
      //   let country = 'the USA'

      //   console.log(`${firstName} ${lastName} is ${age} years old, and lives in ${country}`);
      // }

      // firstName = 'James';
      // logIt();

      // let game = 'Sonic';

      // if (true) {
      //   let game = 'Mario';
      //   console.log(game);
      // }

      // console.log(game);


      // GLOBAL SCOPE

      // FUNCTION SCOPE

      function test() {
        const c = 2;

        if (true) { // curly braces are always block scope
          const c = 3
          console.log(c)
        }
        console.log(c)
      }

      test()

      // BLOCK SCOPE
      // MODULE SCOPE

