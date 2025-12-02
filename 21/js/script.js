let heart = document.querySelector(".heart-icon"),
	cardImage = document.querySelector(".card-image");

cardImage.addEventListener("dblclick", () => {
	heart.style.opacity = 1;
	heart.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

	setTimeout(() => {
		heart.style.opacity = 0;
		heart.style.transform = "translate(-50%, -300%) scale(1) rotate(-90deg)";
	}, 1000);

	setTimeout(function () {
		heart.style.transform = "translate(-50%,-50%) scale(0) rotate(-90deg)";
	}, 1200);
});
