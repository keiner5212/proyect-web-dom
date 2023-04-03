/** @format */
let about_me = document.getElementById("about-me-a");
let card = document.getElementById("about-card");
about_me.addEventListener("click", (e) => {
	e.preventDefault();
	if (card.getAttribute("class") == "hide") {
		card.setAttribute("class", "about-me");
	} else {
		card.setAttribute("class", "hide");
	}
});

let videoContainer = document.getElementById("video-container");

fetch(
	"https://api.giphy.com/v1/gifs/random?api_key=U30oJ969UfRjxSHJyxkv9Z7HVTh100M5&tag=&rating=g"
)
	.then((response) => response.json())
	.then((response) => {
		let newVideo1 = document.createElement("iframe");
		newVideo1.setAttribute("src", response["data"]["embed_url"]);
		newVideo1.setAttribute("frameborder", 0);
		videoContainer.appendChild(newVideo1);

		let newVideo2 = document.createElement("img");
		newVideo2.setAttribute("src", "assets/images/main-video-2.gif");
		videoContainer.appendChild(newVideo2);
	});

fetch(
	"https://api.giphy.com/v1/gifs/random?api_key=U30oJ969UfRjxSHJyxkv9Z7HVTh100M5&tag=&rating=g"
)
	.then((response) => response.json())
	.then((response) => {
		let newVideo1 = document.createElement("iframe");
		newVideo1.setAttribute("src", response["data"]["embed_url"]);
		newVideo1.setAttribute("frameborder", 0);
		videoContainer.appendChild(newVideo1);

		let newVideo2 = document.createElement("img");
		newVideo2.setAttribute("src", "assets/images/main-video-4.gif");
		videoContainer.appendChild(newVideo2);

		let newVideo3 = document.createElement("img");
		newVideo3.setAttribute("src", "assets/images/main-video-5.gif");
		videoContainer.appendChild(newVideo3);
	});
