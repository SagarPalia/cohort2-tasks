let progress = document.querySelector(".progress"),
	progressPercentage = document.querySelector(".progressPercentage"),
	downloadBtn = document.querySelector("#download");

downloadBtn.addEventListener("click", () => {
	let duration = 30 + Math.floor(Math.random() * 50),
		currentProgress = 0;

	console.log("Interval Duration: " + duration);

	let progressValue = setInterval(() => {
		currentProgress++;
		progress.style.width = currentProgress + "%";
		progressPercentage.innerText = `${currentProgress}%`;

		if (currentProgress == 100) clearInterval(progressValue);
	}, duration);
});
