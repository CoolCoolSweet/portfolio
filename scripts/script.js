$(window).on("load", function() {

	// Variables
	let splashText = (window.innerWidth < 600 && window.innerHeight > 449) ? "Sean~ McNeil. Web Developer" : "Sean McNeil. Web Developer";
	const splashTypeTiming = 110;
	let repeatSplashTyping = true;
	const repeatSplashTypingPause = 5000;
	
	// Functions
	const splashTyping = () => {
		let setIntervalIndex = 0;
		$('#home .wrapper').append(`<h1 class="splash-text"></h1>`);
		setInterval(() => {
			if (splashText[setIntervalIndex] === "~") {
				$('#home .wrapper').append(`<h1 class="splash-text">${splashText[setIntervalIndex + 1]}</h1>`);
				setIntervalIndex += 2;
			} else if (splashText[setIntervalIndex] === "." && setIntervalIndex + 1 < splashText.length) {
				$('#home .wrapper').append(`<h2 class="splash-text">${splashText[setIntervalIndex + 1]}</h2>`);
				setIntervalIndex += 2;
			} else if (setIntervalIndex < splashText.length) {
				$('#home .wrapper > *:last-child').append(splashText[setIntervalIndex]);
				setIntervalIndex++;
			} else if (repeatSplashTyping === true) {
				repeatSplashTyping = false;
				setTimeout(() => {
					$('.splash-text').remove();
					setIntervalIndex = 0;
					repeatSplashTyping = true;
					$('#home .wrapper').append(`<h1 class="splash-text"></h1>`);
					splashText = (window.innerWidth < 600 && window.innerHeight > 449) ? "Sean~ McNeil. Web Developer" : "Sean McNeil. Web Developer";
				}, repeatSplashTypingPause);
			}
		}, splashTypeTiming);
	};
	

	// Main
	document.getElementById("form").reset(); 
	
	splashTyping();

	$("#home ul").on("click", "a", function (e) {
		e.preventDefault();
		$("#home ul").removeClass("hamburger-toggle");
		let clicked = $(this).text().toLowerCase();
		document.querySelector(`#${clicked}`).scrollIntoView({
			behavior: 'smooth',
			block: "start"
		});
	});

	$("#home .hamburger").on("click", function (e) {
		$("#home ul").addClass("hamburger-toggle");
	});

});