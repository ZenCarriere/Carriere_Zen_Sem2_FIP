(() => {
	let button1 = document.querySelector(".productButton1"),
	button2 = document.querySelector(".productButton2"),
	button3 = document.querySelector(".productButton3"),
	text1 = document.querySelector(".RMText1"),
	text2 = document.querySelector(".RMText2"),
	text3 = document.querySelector(".RMText3"),
	buttonA1 = document.querySelector(".ProductButton1"),
	buttonA2 = document.querySelector(".ProductButton2"),
	buttonA3 = document.querySelector(".ProductButton3");


	const productInfo =[
	["A great deal for those who use the product daily, families who love the great taste and cleaning properties, and anyone who cares for the mouth's health."],
	["The same Crest brand product for a healthy mouth with the great flavour of Grolsch beer. A perfect combination for those who like to pretend it's five O'clock somewhere, even at 6 AM."],
	["From now until September 1st, each single bottle of Grolsch Crest Pro Health Mouth Wash comes with a voucher for a free bottle with a later purchase!"]

	]

	function displayText1() {

		text1.textContent=`${productInfo[0]}`;
		buttonA1.classList.toggle("hidden");
	}

		function displayText2() {

		text2.textContent=`${productInfo[1]}`;
		buttonA2.classList.toggle("hidden");
	}

		function displayText3() {

		text3.textContent=`${productInfo[2]}`;
		buttonA3.classList.toggle("hidden");
	}


	button1.addEventListener("click", displayText1);
	button2.addEventListener("click", displayText2);
	button3.addEventListener("click", displayText3);


})();