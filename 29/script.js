// SECTION 1: Objects and OOPS Thinking (Foundation)

// Q1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
	name: "sagar",
	email: "email@sagarpalia.com",
	login: function () {
		console.log(`${this.name} logged in`);
	},
};

user.login();

// Q2.	Imagine you now have 5 users. First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// Without class
let user1 = {
	name: "user 1",
	email: "user1@email.com",
};
let user2 = {
	name: "user 2",
	email: "user2@email.com",
};
let user3 = {
	name: "user 3",
	email: "user3@email.com",
};
let user4 = {
	name: "user 4",
	email: "user4@email.com",
};
let user5 = {
	name: "user 5",
	email: "user5@email.com",
};

console.log(user1, user2, user3, user4, user5);

// With class
class User {
	constructor(name, email) {
		(this.name = name), (this.email = email);
	}
	loggedIn() {
		console.log(`${this.name} logged in.`);
	}
}

let u1 = new User("user 1", "user1@email.com");
let u2 = new User("user 2", "user2@email.com");
let u3 = new User("user 3", "user3@email.com");
let u4 = new User("user 4", "user4@email.com");
let u5 = new User("user 5", "user5@email.com");

console.log(u1, u2, u3, u4, u5);

// Q3.	Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
	name: "Product name",
	price: 600,
	getDiscountedPrice: function (discount) {
		return this.price * (1 - discount / 100);
	},
};

console.log(product.price);
console.log(product.getDiscountedPrice(10));

// SECTION 2: Classes and Objects

// 4.	Create a Car class with the following: brand, speed, a drive method that prints the car brand and speed

class Car {
	constructor(brand, speed) {
		(this.brand = brand), (this.speed = speed);
	}

	drive() {
		console.log(`Brand: ${this.brand}, Speed: ${this.speed}`);
	}
}

// 5.	Create two different car objects from the same class and verify that their data is different.

let car1 = new Car("Toyota", "150");
let car2 = new Car("Tata", "170");
car1.drive();
car2.drive();

// 6.	Answer this in your own words: If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// Ans: Would have to create seperate objects for everything and it would have created problems in changing values etc if the code is large.

// SECTION 3: Constructor and this keyword

// 7.	Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
// 8.	Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.
class Student {
	constructor(name, rollno) {
		(this.name = name), (this.rollno = rollno);
	}
	introduce() {
		console.log(`${this.name} - ${this.rollno}`);
	}
}

// 9.	Create an object with two methods: One method using a normal function; One method using an arrow function. Inside both, print this and observe the difference.
const obj = {
	func: function () {
		console.log("Function: ", this);
	},
	arrowFunc: () => {
		console.log("Arrow Function: ", this);
	},
};

obj.func(); // this keyword in function returns the current object
obj.arrowFunc(); // this keyword in arrow function takes value from parent

// SECTION 4: Constructor Functions and Prototypes
// 10.	Create a User constructor function (do not use class syntax).
// 11.	Add a login method in two ways: First, inside the constructor; Then, move the method to the prototype

function UserC(name) {
	this.name = name;
	this.login = function () {
		console.log("constructor: logged in");
	};
}

let usr1 = new UserC("Sagar");

UserC.prototype.loggedIn = function () {
	console.log("prototype: logged in");
};

usr1.login();
usr1.loggedIn();

// 12.	Create two User objects and compare their login methods using equality. Explain why the result is true or false.

let usr2 = new UserC("Palia");

console.log(usr1.login === usr2.login); // returns false - each obj has their own function if made in constructor
console.log(usr1.loggedIn === usr2.loggedIn); // returns true - each object shares the function made in prototype

// SECTION 5: call, apply, bind

// 13.	Create a function that prints this.name.
// 14.	Create an object that contains a name property.
// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 15.	Borrow a method from one object and run it for another object using call.

function print(a, b, c, d) {
	console.log(this.name);
}

let object = {
	name: "sagar",
};
print(); // "this" refers to window that has name as blank. so returns blank.
print.call(object); // sets the value of "this" to object and prints object.name - "sagar"
print.apply(object, [1, 2, 3, 4]);

let newFn = print.bind(object);
newFn();
