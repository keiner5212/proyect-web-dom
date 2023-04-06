/** @format */

class funFact {
	constructor() {}

	generate() {
		let p = new Promise((resolve) => {
			let rand = Math.floor(Math.random() * 2);
			let fetching;
			switch (rand) {
				case 0:
					fetching = fetch(
						"https://uselessfacts.jsph.pl/api/v2/facts/random"
					);
					break;
				case 1:
					fetching = fetch("https://dogapi.dog/api/facts?number=1");
					break;
				default:
					fetching = fetch(
						"https://uselessfacts.jsph.pl/api/v2/facts/random"
					);
					break;
			}
			fetching
				.then((response) => response.json())
				.then((response) => {
					if (response["text"]) {
						resolve(response["text"]);
					} else if (response["facts"]) {
						resolve(response["facts"][0]);
					} else {
						resolve(response);
					}
				});
		});
		return p;
	}
}

class joke {
	constructor() {}

	generate() {
		let p = new Promise((resolve) => {
			let rand = Math.floor(Math.random() * 2);
			let fetching;
			switch (rand) {
				case 0:
					fetching = fetch(
						"https://random-stuff-api.p.rapidapi.com/joke/random?exclude=dirty%2Cmoney",
						{
							method: "GET",
							headers: {
								Authorization: "chrnMsqPx8Ww",
								"X-RapidAPI-Key":
									"377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356",
								"X-RapidAPI-Host":
									"random-stuff-api.p.rapidapi.com",
							},
						}
					);
					break;
				case 1:
					fetching = fetch("https://api.chucknorris.io/jokes/random");
					break;
				default:
					fetching = fetch(
						"https://random-stuff-api.p.rapidapi.com/joke/random?exclude=dirty%2Cmoney",
						{
							method: "GET",
							headers: {
								Authorization: "chrnMsqPx8Ww",
								"X-RapidAPI-Key":
									"377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356",
								"X-RapidAPI-Host":
									"random-stuff-api.p.rapidapi.com",
							},
						}
					);
					break;
			}
			fetching
				.then((response) => response.json())
				.then((response) => {
					if (response["value"]) {
						resolve(response["value"]);
					} else if (response["message"]) {
						resolve(response["message"]);
					}
				});
		});
		return p;
	}
}
let funf = document.getElementById("fun-fact");
let x = new funFact();
x.generate().then((res) => {
	funf.textContent = res;
});
let joke_p = document.getElementById("joke");
x = new joke();
x.generate().then((res) => {
	joke_p.textContent = res;
});

let newscont = document.getElementById("news-container");
let t = new Date().toLocaleString();
let mount = parseInt(t.split("/")[1]) - 1;
let day = parseInt(t.split("/")[0]) + 1;
fetch(
	"https://newsapi.org/v2/everything?q=technology&from=2023-0" +
		mount +
		"-0" +
		day +
		"&sortBy=publishedAt&apiKey=ee85dbccca2842309262f2907c5eac22"
)
	.then((response) => response.json())
	.then((response) => {
		let new1 = document.createElement("div");
		let rand = Math.floor(Math.random() * 100);
		let text =
			"<div>" +
			"<h3>" +
			(response["articles"][rand]["author"]
				? response["articles"][rand]["author"]
				: "Unknown") +
			"</h3>" +
			"<p>" +
			response["articles"][rand]["description"] +
			"</p>" +
			'<a href="' +
			response["articles"][rand]["url"] +
			'" target="_blank">...Read more</a>' +
			"<h3>" +
			response["articles"][rand]["publishedAt"].split("T")[0] +
			"</h3>" +
			"</div>";
		new1.innerHTML = text;
		let new2 = document.createElement("div");
		rand = Math.floor(Math.random() * 100);
		text =
			"<div>" +
			"<h3>" +
			(response["articles"][rand]["author"]
				? response["articles"][rand]["author"]
				: "Unknown") +
			"</h3>" +
			"<p>" +
			response["articles"][rand]["description"] +
			"</p>" +
			'<a href="' +
			response["articles"][rand]["url"] +
			'" target="_blank">...Read more</a>' +
			"<h3>" +
			response["articles"][rand]["publishedAt"].split("T")[0] +
			"</h3>" +
			"</div>";
		new2.innerHTML = text;
		let new3 = document.createElement("div");

		rand = Math.floor(Math.random() * 100);
		text =
			"<div>" +
			"<h3>" +
			(response["articles"][rand]["author"]
				? response["articles"][rand]["author"]
				: "Unknown") +
			"</h3>" +
			"<p>" +
			response["articles"][rand]["description"] +
			"</p>" +
			'<a href="' +
			response["articles"][rand]["url"] +
			'" target="_blank">...Read more</a>' +
			"<h3>" +
			response["articles"][rand]["publishedAt"].split("T")[0] +
			"</h3>" +
			"</div>";
		new3.innerHTML = text;
		let new4 = document.createElement("div");

		rand = Math.floor(Math.random() * 100);
		text =
			"<div>" +
			"<h3>" +
			(response["articles"][rand]["author"]
				? response["articles"][rand]["author"]
				: "Unknown") +
			"</h3>" +
			"<p>" +
			response["articles"][rand]["description"] +
			"</p>" +
			'<a href="' +
			response["articles"][rand]["url"] +
			'" target="_blank">...Read more</a>' +
			"<h3>" +
			response["articles"][rand]["publishedAt"].split("T")[0] +
			"</h3>" +
			"</div>";
		new4.innerHTML = text;
		newscont.appendChild(new1);
		newscont.appendChild(new2);
		newscont.appendChild(new3);
		newscont.appendChild(new4);
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
