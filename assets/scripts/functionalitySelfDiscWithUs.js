/** @format */

function getCaptions() {
	let p = new Promise((resolve) => {
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", "assets/memeCaptions.json", true);
		xhttp.send();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				resolve(JSON.parse(this.responseText));
			}
		};
	});
	return p;
}
let count = 30;
let selector = document.getElementById("captions-selector");
let time = document.getElementById("time");
let button_start = document.getElementById("start-button");
let form_meme_caption = document.getElementById("form-meme-captions");
button_start.addEventListener("click", () => {
	button_start.setAttribute("class", "hide");
	form_meme_caption.setAttribute("class", "meme-caption-form");
	setInterval(() => {
		time.textContent = count--;
		if (count === -2) {
			//we set -2 due to a little issue when counting in regresion,
			//it stops counting in 2 when it is requested to be en 0
			time.setAttribute("class", "hide");
			window.alert("Error: Try Again!");
			location.reload();
		}
	}, 1000);
	let meme_img = document.getElementById("meme");
	fetch("https://api.imgflip.com/get_memes")
		.then((response) => response.json())
		.then((response) => {
			let random = Math.floor(Math.random() * 100);
			meme_img.setAttribute(
				"src",
				response["data"]["memes"][random]["url"]
			);
		})
		.catch((err) => console.error(err));
	let option1 = document.createElement("option");
	let option2 = document.createElement("option");
	let option3 = document.createElement("option");
	getCaptions().then((captions) => {
		let random = Math.floor(Math.random() * 72);
		option1.textContent = captions[random];
		random = Math.floor(Math.random() * 72);
		option2.textContent = captions[random];
		random = Math.floor(Math.random() * 72);
		option3.textContent = captions[random];
		selector.appendChild(option1);
		selector.appendChild(option2);
		selector.appendChild(option3);
	});
});

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

form_meme_caption.addEventListener("submit", (e) => {
	e.preventDefault();
	if (selector.selectedIndex === 0) {
		window.alert("Error: you must choose something");
	} else {
		count = -5;
		let main = document.querySelector("main");
		main.innerHTML =
			'<div class="meme-caption-form">' +
			"<p>Your result is:</p>" +
			'<img src="' +
			"assets/images/PersonalityResultsImages/PersonalityPic_" +
			Math.floor(Math.random() * 29) +
			".png" +
			'" alt="x">' +
			"</div>";
	}
});
