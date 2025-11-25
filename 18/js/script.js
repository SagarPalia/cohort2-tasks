const teams = [
	{
		initials: "CSK",
		name: "Chennai Super Kings",
		colors: {
			primary: "yellow",
			textColor: "black",
		},
	},
	{
		initials: "MI",
		name: "Mumbai Indians",
		colors: {
			primary: "blue",
			textColor: "white",
		},
	},
	{
		initials: "RCB",
		name: "Royal Challengers Bengaluru",
		colors: {
			primary: "red",
			textColor: "white",
		},
	},
	{
		initials: "KKR",
		name: "Kolkata Knight Riders",
		colors: {
			primary: "purple",
			textColor: "white",
		},
	},
	{
		initials: "PBKS",
		name: "Punjab Kings",
		colors: {
			primary: "red",
			textColor: "white",
		},
	},
	{
		initials: "RR",
		name: "Rajasthan Royals",
		colors: {
			primary: "pink",
			textColor: "black",
		},
	},
	{
		initials: "SRH",
		name: "Sunrisers Hyderabad",
		colors: {
			primary: "orange",
			textColor: "black",
		},
	},
	{
		initials: "DC",
		name: "Delhi Capitals",
		colors: {
			primary: "skyblue",
			textColor: "black",
		},
	},
	{
		initials: "GT",
		name: "Gujarat Titans",
		colors: {
			primary: "#222839",
			textColor: "white",
		},
	},
	{
		initials: "LSG",
		name: "Lucknow Super Giants",
		colors: {
			primary: "blue",
			textColor: "white",
		},
	},
];

let body = document.body,
	h1 = document.querySelector("h1"),
	predictBtn = document.querySelector("#predict");

predictBtn.addEventListener("click", () => {
	let randomTeam = teams[Math.floor(Math.random() * teams.length)];
	h1.innerText = `${randomTeam.name} (${randomTeam.initials})`;
	body.style.color = randomTeam.colors.textColor;
	body.style.backgroundColor = randomTeam.colors.primary;
});
