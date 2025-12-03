const musicSvg = document.querySelector(".music-svg");

let allowedKeys = [
	"Q",
	"W",
	"E",
	"R",
	"T",
	"Y",
	"U",
	"I",
	"O",
	"P",
	"A",
	"S",
	"D",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	"C",
	"V",
	"B",
	"N",
	"M",
];

let sound = new Audio();

const glowIcon = () => {
	musicSvg.style.opacity = 0.4;
	setTimeout(() => {
		musicSvg.style.opacity = 0.2;
	}, 500);
};

const playAudio = (code) => {
	let key = code.slice(3);

	if (allowedKeys.includes(key)) {
		sound.src = `./sounds/${key}.mp3`;
		sound.play();
		glowIcon();
	}
};

window.addEventListener("keypress", (key) => {
	playAudio(key.code);
});
