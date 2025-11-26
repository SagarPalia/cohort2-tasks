let main = document.querySelector("main"),
	generateBtn = document.querySelector("#generate");

const webDevQuotes = [
	"Good code is like humor—if you have to explain it, it's bad.",
	"The best UX is the one users don't notice.",
	"A website is never finished, only deployed for now.",
	"Readability counts more than cleverness.",
	"Your code reflects your discipline, not your genius.",
	"Design with empathy, develop with clarity.",
	"Every bug starts as a confident assumption.",
	"The browser is your canvas, not your cage.",
	"Simplicity is the ultimate performance booster.",
	"Version control is a developer's time machine.",
	"Fast sites earn trust; slow sites lose it.",
	"Debugging is just detective work with semicolons.",
	"Code as if the next person maintaining it is armed.",
	"The web waits for no framework.",
	"Accessibility is not optional; it's respect.",
	"Comments don't replace clarity—good naming does.",
	"Optimization starts with understanding, not obsession.",
	"Responsive design is thoughtful design.",
	"Consistency in code creates confidence in teams.",
	"Your website is the front door to your ideas.",
];

generateBtn.addEventListener("click", () => {
	let coords = {
		x: Math.floor(Math.random() * 80),
		y: Math.floor(Math.random() * 80),
		rotation: Math.floor(Math.random() * 360),
	};

	let quote = document.createElement("h2");
	quote.innerText =
		webDevQuotes[Math.floor(Math.random() * webDevQuotes.length)];
	quote.style.scale = Math.floor(Math.random() * 4);
	quote.style.color = "white";
	quote.style.opacity = "75%";
	quote.style.position = "absolute";
	quote.style.top = coords.y + "%";
	quote.style.left = coords.x + "%";
	quote.style.rotate = coords.rotation + "deg";
	main.appendChild(quote);
});
