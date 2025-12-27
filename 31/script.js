/*
Project Scenario 1 — Weather Dashboard with Error Handling
Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

Requirements
- Make the API request asynchronously using `fetch` with `async/await`.
- Handle API request failures (for example, invalid city name) using `try/catch`.
- Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

Suggested tasks
- Build a simple UI to input a city name and display the result.
- Show user-friendly error messages for network errors, invalid input, or API errors.
- Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.
*/

const apikey = "b92e57938eaebc6ded1fcf3a2f5b4bc3"; // used this because my api key would take some time to activate as per the website email

async function getWeather(city) {
	try {
		let data = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
		);
		if (!data.ok) {
			throw new Error("Something went wrong");
		}
		let result = await data.json();
		console.log(result);
		if (result.main.temp < 20) {
			throw new Error(
				"Too Cold! Temperature is less than 20 degrees. Get the blankets and heater!!"
			);
		} else if (result.main.temp > 40) {
			throw new Error(
				"Too Hot! Temperature is more than 40 degrees. Stay in the AC room and chill!!"
			);
		}
	} catch (err) {
		console.log(err.message);
	}
}

getWeather("delhi");

/*
Project Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling
Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

Requirements
- Send all emails in parallel using `Promise.all`.
- If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
- Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

Suggested tasks
- Create an array of 5 mock email tasks that resolve or reject based on a random condition.
- Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
- Ensure the `finally` block runs to update the UI or console indicating completion.

---

Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
*/

const user_emails = [
	"xyz121@xyz.com",
	"xyz122@xyz.com",
	"xyz123@xyz.com",
	"xyz124@xyz.com",
	"xyz125@xyz.com",
];

function sendEmail(emailId) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			let probablity = Math.floor(Math.random() * 9);
			if (probablity < 5) {
				resolve(`Sent successfully to ${emailId}`);
			} else {
				reject(`Could not send to ${emailId}`);
			}
		}, Math.floor(Math.random() * 5) * 1000);
	});
}

async function sendGroupEmails(emailIds) {
	let responses = emailIds.map((id) => {
		return sendEmail(id)
			.then((data) => data)
			.catch((err) => err);
	});

	(await Promise.all(responses)).forEach((res) => console.log(res));
}

sendGroupEmails(user_emails);
