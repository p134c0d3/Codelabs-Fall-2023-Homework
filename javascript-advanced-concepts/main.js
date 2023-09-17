// // Build Patterns

// // class Address {
// //   constructor(street, zip) {
// //     this.street = street;
// //     this.zip = zip;
// //   }
// // }

// // class User {
// //   constructor(name, {age, phone = '123456789', address} = {}) {
// //     this.name = name;
// //     this.age = age;
// //     this.phone = phone;
// //     this.address = address;
// //   }
// // }

// // let user = new User('John', {age:30, address: 'Cobblestone Lane'})
// // console.log(user);

// function getUsers() {
// 	return fetch("https://jsonplaceholder.typicode.com/users");
// }

// function getUserPosts(userId) {
// 	return getFetch("https://jsonplaceholder.typicode.com/posts", {
// 		userId: userId,
// 	});
// }

// // getUsers().then((users) => {
// // 	users.forEach((user) => {
// // 		getUserPosts(user.id).then((posts) => {
// // 			console.log(user.name);
// // 			console.log(posts.length);
// // 		});
// // 	});
// // });

// {
// 	userId: 1;
// }
// [[userId, 1]];
// function getFetch(url, params = {}) {
// 	const queryString = Object.entries(params)
// 		.map((param) => {
// 			return `${param[0]}=${param[1]}`;
// 		})
// 		.join("&");
// 	return fetch(`${url}?${queryString}`, {
// 		method: "GET",
// 		headers: { "Content-Type": "application/json" },
// 	}).then((res) => res.json());
// }


