// const user = {
//   firstName: 'John',
//   lastName: 'Pierce',
//   fullName: function() { 
//     const arrowFunction = () => { // arrow function will refer to the nearest parent function that surrounds it
//       console.log(this);
//       console.log(this.firstName + ' ' + this.lastName);

//     }
//     arrowFunction();
//   }
// }

// user.fullName();


// const user = {
//   firstName: 'John',
//   lastName: 'Pierce',
//   hobbies: ['programming', 'piano'],
//   listHobbies: function() {
//     this.hobbies.forEach(function(hobby) {
//       console.log(this.firstName);
//       console.log(hobby);
//     }, this);
//   }
// }

// user.listHobbies();

function User(name) {
  this.name = name;
  console.log(this);
}

const devsage = new User('DevSage');
const codingphase = new User('codingphase')
