/*
Exercise 1 — Very Easy (Warming up)
Task (Hindi): Ek function banao `afterDelay`
Requirements:
- Ye function do cheezein lega:
  1. `time` (milliseconds)
  2. `callback` function
- Given `time` ke baad `callback` call kare
- Callback ke andar `"Callback executed"` print hona chahiye

Use case:
> “2 second baad ek kaam karna hai”

Goal:
- Samajhna ki callback delay ke baad kaise execute hota hai
- Ye `setTimeout` + callback connection hai
*/

function afterDelay(time, cb) {
	setTimeout(function () {
		cb();
		console.log(`Callback executed after ${time} milliseconds`);
	}, time);
}

afterDelay(2000, function () {
	console.log("Hi");
});

/*
Exercise 2 — Intermediate (Data flow)
Task (Hindi): Ek function banao `getUser`

Requirements:
- `getUser` `username` lega
- 1 second ke baad `callback` ko ek object de:
  - `id`
  - `username`

Then:
- Callback ke andar ek aur function call karo `getUserPosts`

`getUserPosts` requirements:
- `userId` lega
- 1 second ke baad `callback` ko `posts` ka array de

Final output:
- User ka `username` print ho
- Fir uske `posts` print ho

Goal:
- Samajhna ki ek async ka result next async ko kaise milta hai
- Callback chaining practice
*/

function getUser(username, cb) {
	console.log("Getting user details");
	setTimeout(function () {
		cb({ id: "1", username });
	}, 1000);
}

function getUserPosts(id, cb) {
	console.log("Getting user posts");
	setTimeout(function () {
		cb(["post 1", "post 2"]);
	}, 2000);
}

getUser("sagar4398", function ({ id, username }) {
	getUserPosts(id, function (posts) {
		console.log(username, posts);
	});
});

/*
Exercise 3 — Intermediate (Callback dependency — thoda painful)
Task (Hindi): Teen functions banao:

1. `loginUser`
  - 1 second baad callback ko `user` object de
2. `fetchPermissions`
  - `userId` lega
  - 1 second baad callback ko `permissions` array de
3. `loadDashboard`
  - `permissions` lega
  - 1 second baad callback ko `"Dashboard loaded"` bole

Flow:
- Pehle `loginUser`
- Uske andar `fetchPermissions`
- Uske andar `loadDashboard`
- Final output console mein print ho

Goal:
- Callback nesting ko feel karna
- Yehi structure baad mein callback hell banta hai
*/

function loginUser(username, cb) {
	console.log("user logging in");

	setTimeout(function () {
		cb({ id: "1", username });
	}, 1000);
}

function fetchPermissions(id, cb) {
	console.log("getting permissions");
	setTimeout(function () {
		cb(["permission1", "permission2"]);
	}, 1000);
}

function loadDashboard(permissions, cb) {
	console.log("loading dashboard");
	setTimeout(function () {
		cb();
	}, 1000);
}

loginUser("sagar", function (data) {
	fetchPermissions(data.id, function (permissions) {
		loadDashboard(permissions, function () {
			console.log("Dashboard loaded");
		});
	});
});
