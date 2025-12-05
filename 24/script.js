let reelsData = [
	{
		username: "sam4102",
		likeCount: 1420,
		isLiked: false,
		commentCount: 42,
		shareCount: 72,
		isFollowed: false,
		video: "./videos/video_1.mp4",
		userprofile:
			"https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		username: "newyork_couple",
		likeCount: 9820,
		isLiked: true,
		commentCount: 184,
		shareCount: 41,
		isFollowed: false,
		video: "./videos/video_2.mp4",
		userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
	},
	{
		username: "fitness_tips",
		likeCount: 2250,
		isLiked: false,
		commentCount: 612,
		shareCount: 138,
		isFollowed: true,
		video: "./videos/video_3.mp4",
		userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
	},
];

let reelsContainer = document.querySelector("#reels");
let fetchedReels = "";

const render = () => {
	reelsData.forEach((reel, index) => {
		fetchedReels += `
		<div class="reel">
			<div class="video">
				<video src="${reel.video}" autoplay loop muted></video>
			</div>
			<div class="details">
				<div class="user">
					<img
						src="${reel.userprofile}"
						alt="${reel.username}"
					/>
					<h2>${reel.username}</h2>
					<button id="${index}">${reel.isFollowed ? "Unfollow" : "Follow"}</button>
				</div>
				<p>...</p>
			</div>
			<div class="stats">
				<div class="likes" id="${index}">
					<h4><i class="likeBtn ${
						reel.isLiked ? "ri-heart-3-fill" : "ri-heart-3-line"
					}"></i></h4>
					<h6>${reel.likeCount}</h6>
				</div>
				<div class="comment">
					<h4><i class="ri-chat-3-line"></i></h4>
					<h6>${reel.commentCount}</h6>
				</div>
				<div class="share">
					<h4><i class="ri-share-forward-line"></i></h4>
					<h6>${reel.shareCount}</h6>
				</div>
				<div class="menu">
					<h4><i class="ri-more-2-fill"></i></h4>
				</div>
			</div>
		</div>
	`;
	});
	reelsContainer.innerHTML = fetchedReels;
};

render();

reelsContainer.addEventListener("click", (e) => {
	const currentReel = e.target.parentElement.parentElement;
	// likes
	if (currentReel.className == "likes") {
		if (reelsData[currentReel.id].isLiked) {
			reelsData[currentReel.id].likeCount--;
			reelsData[currentReel.id].isLiked = false;
			currentReel.querySelector(".likeBtn").className =
				"likeBtn ri-heart-3-line";
			currentReel.querySelector("h6").innerText =
				reelsData[currentReel.id].likeCount;
		} else {
			reelsData[currentReel.id].likeCount++;
			reelsData[currentReel.id].isLiked = true;
			currentReel.querySelector(".likeBtn").className =
				"likeBtn ri-heart-3-fill";
			currentReel.querySelector("h6").innerText =
				reelsData[currentReel.id].likeCount;
		}
	}
});
