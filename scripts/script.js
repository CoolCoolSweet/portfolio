$( function() {

	// Variables
	const splashText = "Sean McNeil. Web Developer"
	const splashTypeTiming = 110;
	let repeatSplashTyping = true;
	const repeatSplashTypingPause = 5000;
	
	// Functions
	const splashTyping = () => {
		let setIntervalIndex = 0;
		$('#home .wrapper').append(`<h1 class="splash-text"></h1>`);
		setInterval(() => {
			if (splashText[setIntervalIndex] === "." && setIntervalIndex + 1 < splashText.length) {
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
				}, repeatSplashTypingPause);
			}
		}, splashTypeTiming);
	};
	
	splashTyping();

	$("#home ul").on("click", "a", function (e) {
		e.preventDefault();
		let clicked = $(this).text().toLowerCase();
		document.querySelector(`#${clicked}`).scrollIntoView({
			behavior: 'smooth',
			block: "start"
		});
	});

});