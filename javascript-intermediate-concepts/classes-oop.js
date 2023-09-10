//// Classes and Object Oriented Programming

// Inheritance
// Encapsulation
// Abstraction
// Polymorphism

////////// Bad way of assigning players, names, items, etc
// const player = {
//   name: "?",
//   hp: 100,
//   mp: 0,
//   items: []
// }

// const hanSolo = player;
// const darthVader = player;

// hanSolo.name = "Han Solo"
// hanSolo.hp = 80;
// hanSolo.mp = 20;
// hanSolo.items = ["Blaster"]

// console.log(hanSolo);
// console.log(darthVader);

////////// Slightly better way of assigning players, names, items, etc.

// const createPlayer = (name, hp, mp, items) => {
//   return {
//     name,
//     hp,
//     mp,
//     items
//   }
// }

// const hanSolo = createPlayer('Han Solo', 100, 10, ['blaster'])
// hanSolo.hp = 150;
// console.log(hanSolo);

// const darthVader = createPlayer('Darth Vader', 200, 50, ['lightsaber'])
// console.log(darthVader);

////////// Correct/Best way for assigning players, names, items, etc

class Player {
  age = 20;
	constructor(name, hp, mp, items) {
		this.name = name;
		this.hp = hp;
		this.mp = mp;
		this.items = items;
	}
	speak(phrase) {
		console.log(`${this.name} says: ${phrase}`);
	}
}

// const hanSolo = new Player();
// console.log(hanSolo.__proto__);

// function AnotherPlayer() {}
const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
hanSolo.speak("Never tell me the odds!");
hanSolo.age = 50;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));



const darthVader = new Player("Darth Vader", 200, 50, ["lightsaber"]);
darthVader.speak("You don't know the power of the dark side...");
darthVader.age = 70;
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));



// const john = new Player("John", 25, 5, ["Laptop"]);
// john.speak(
// 	"All I want is for my day job to match my passion, which is programming!"
// );
// console.log(john);
// console.log(Object.getOwnPropertyNames(john));
// console.log(Object.getOwnPropertyNames(john.__proto__));
