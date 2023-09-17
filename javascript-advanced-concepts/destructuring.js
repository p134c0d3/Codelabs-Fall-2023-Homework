// let person = {
//   firstName: 'John',
//   middleName: 'David',
//   lastName: 'Pierce',
//   // currentAge: 29
// };

// let personFirstName = person.firstName;
// let personLastName = person.lastName;

// // let { firstName, lastName } = person;
// // let { firstName, lastName, middleName } = person;
// let { firstName, lastName, middleName = 'Daniel', currentAge: age = 30 } = person;

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// console.log(age);

// let { firstName: fName, lastName: lName } = person;




// const names = [
//   'Sonny', 
//   'Jay', 
//   'Brian', 
//   'Rodgers'
// ];
// 
// const [x, a, ...y] = names;
// 
// console.log(x);
// console.log(a);
// console.log(y);






// const person = {
//   name: 'John Pierce',
//   age: 30, 
//   gender: 'Male'
// }

// let { name, ...rest } = person;

// console.log(name);
// console.log(rest);




// let name1 = 'John';
// let name2 = 'Tiffany';

// [name1, name2] = [name2, name1];

// console.log(name1);
// console.log(name2);






// function getPerson() {
//   return null;
// }

// let { firstName, lastName } = getPerson() || {};

// console.log(firstName, lastName);






// let member = {
//   id: 1, 
//   name: {
//     firstName: 'John',
//     lastName: 'Pierce'
//   }
// };


// let { id, name: {firstName, lastName } } = member;

// console.log(id);
// console.log(firstName);
// console.log(lastName);





// let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

// let person = {
//   firstName: 'John', 
//   lastName: 'Pierce'
// }

// console.log(displayFullName(person));
