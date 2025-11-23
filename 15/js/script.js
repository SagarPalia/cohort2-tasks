// QUESTIONS - LEVEL 2

// q1 - Write a higher-order function `runTwice(fn)` thattakes another function and executes it two times.

function runTwice(fn) {
	fn();
	fn();
}

function printMessage() {
	console.log("Message Printed");
}

runTwice(printMessage);

// q2 - Create one pure function that always returns the same output for a given input, and one impure function using a global variable

// Pure Function
function sum(a, b) {
	console.log(a + b);
}

sum(10, 20); // prints 30
sum(10, 20); // prints 30

// Impure Function
let count = 0;
function addToCount(value) {
	count += value;
	console.log(count);
}

addToCount(10); // prints 10
addToCount(10); // prints 20

// q3 - CAF that uses object destructuring inside parameters to extract and print `name` and`age`.

let person = {
	name: "Sagar",
	age: 27,
};

function printDetails({ name, age }) {
	console.log(`${name} - ${age}`);
}

printDetails(person);

// q4 - Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

let obj = {
	name: "Sagar",
	f1: function () {
		console.log(this);
	},
	f2: () => {
		console.log(this);
	},
};

obj.f1();
obj.f2();

// q5 - Given an array of numbers, use `map()` to create a new array where each number is squared.

let numbers = [10, 20, 30, 40, 50];
let squaredNumbers = [];

numbers.map((number) => {
	squaredNumbers.push(number ** 2);
});

console.log(numbers);
console.log(squaredNumbers);

// q6 - Use `filter()` to get only even numbers from an array.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((number) => {
	return number % 2 === 0;
});

console.log(evenNumbers);

// q7 - Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

let salaries = [1000, 2000, 3000];

let totalSalary = salaries.reduce((acc, salary) => {
	return acc + salary;
}, 0);

console.log(totalSalary);

// q8 - Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

let names = ["Shyam", "Raju", "Babu Rao", "Munna Bhai", "Kachra Seth", "Kanji"];

let response = names.some((name) => {
	return name.length > 5;
});

console.log(response); // returns true - atleast one name has length > 5

response = names.every((name) => {
	return name.length > 5;
});

console.log(response); // returns false - every name does not have length > 5

// q9 - Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

let customer = {
	name: "XYZ",
	age: 35,
};

customer.age = 30;
console.log(customer.age);

Object.seal(customer);
customer.age = 35;
customer.social = "facebook";
console.log(customer); // returns customer object with modified value of age but without social - modifications possible but no new additions

Object.freeze(customer);
customer.age = 25; // does not work
console.log(customer.age); // returns last given value of age (35) - i.e. no modifications and no additions

// q10 - Create a nested object (`user → address → city`) and access the city name inside it.

let user = {
	name: "Sagar",
	age: 27,
	address: {
		city: "New Delhi",
		state: "Delhi",
	},
};

console.log(user.address.city);
