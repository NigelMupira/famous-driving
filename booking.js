const clickableDates = document.querySelectorAll(".clickable");

clickableDates.forEach(date => {
	date.addEventListener("click", () => {
	 alert("You have clicked on May " + date.textContent + " and yes, this is a free date to book your lesson. Please fill out the booking form to confirm your appointment.");
	});
});

function paymentMethod(){
	alert("UNDER CONSTRUCTION!!!")
}