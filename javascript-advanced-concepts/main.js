// Build Patterns

// class Address {
//   constructor(street, zip) {
//     this.street = street;
//     this.zip = zip;
//   }
// }

// class User {
//   constructor(name, {age, phone = '123456789', address} = {}) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// let user = new User('John', {age:30, address: 'Cobblestone Lane'})
// console.log(user);

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
  }).then(res => res.json())
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  }).then(res => res.json())
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    })
  })
})

{ userId: 1 }
[[userId, 1]]
function getFetch(url, params) {
  const queryString = Object.entries(params).map(param => {
    return ``
  })
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  }).then(res => res.json())
}
