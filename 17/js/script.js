function randomRGB() {
	return Math.floor(Math.random() * 256);
}

let bgColor = `${randomRGB()}, ${randomRGB()}, ${randomRGB()}`,
	body = document.body,
	h2 = document.querySelector("h2");

body.style.backgroundColor = `rgb(${bgColor})`;
h2.innerText = `rgb(${bgColor})`;
