let result;

// q1 - Create a function (CAF) sayHello that prints "Hello Javascript"

function sayHello() {
	console.log("Hello Javascript");
}

sayHello();

// q2 - CAF add(a,b) that returns their sum & log the result

function add(a, b) {
	let result = a + b;
	return result;
}

result = add(10, 15);
console.log(result);

// q3 - CAF with a default parameter name = "Guest" that prints "Hi <name>";

function sayHi(name = "guest") {
	console.log(`Hi ${name}`);
}

sayHi();
sayHi("Sagar");

// q4 - Use rest paremeters to CAF that add unlimited numbers

function sum(...numbers) {
	let sum = 0;
	// numbers.forEach((number) => {
	// 	sum += number;
	// });

	sum = numbers.reduce((acc, number) => {
		return acc + number;
	}, 0);
	return sum;
}

result = sum(10, 15, 30, 45, 30);
console.log(result);

// q5 - CAF (IIFE) that prints "I run instantly"

(function () {
	console.log("I run instantly");
})();

// q6 - Create a nested function where the inner one prints a variable from the outer one

function printFromNested() {
	let message = "Hi, all well?";
	(function nestedFn() {
		console.log(message);
	})();
}

printFromNested();

// q7 - Create an array of 5 fruits. Add one at the end and remove one from the beginning;

let fruits = ["apple", "mango", "strawberry", "pineapple", "guava"];

fruits.push("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits);

// q8 - use a for loop to print all elements of an array

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// q9 - Create an object person with keys name, age and city; and print each key's value

let person = {
	name: "Sagar",
	age: 27,
	city: "New Delhi",
};

console.log(`${person.name} - ${person.age} - ${person.city}`);

// q10 - Use setTimeOut() to log "Time's up!" after 2 secons

setTimeout(() => {
	console.log("Time's Up!");
}, 2000);
