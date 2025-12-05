let matrix = document.querySelector(".matrix");
const text = matrix.innerText;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const textLength = text.split("").length;
let count = 0;

const randomText = () => {
	const str = text
		.split("")
		.map((char, index) => {
			return index < count
				? char
				: characters.split("")[Math.floor(Math.random() * characters.length)];
		})
		.join("");
	matrix.innerText = str;
	count += 0.75;
	if (count > textLength) clearInterval(intervalId);
};

let intervalId = setInterval(randomText, 100);
