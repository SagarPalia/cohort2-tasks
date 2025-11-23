let counterValue = 0,
	counter = document.querySelector("#counter"),
	incrementButton = document.querySelector("#increment"),
	decrementButton = document.querySelector("#decrement");

incrementButton.addEventListener("click", () => {
	counterValue++;
	counter.innerHTML = counterValue;
});

decrementButton.addEventListener("click", () => {
	counterValue--;
	counter.innerHTML = counterValue;
});
