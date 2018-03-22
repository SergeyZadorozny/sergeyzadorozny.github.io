'use strict'

var addBasket = document.querySelector('.modal-add-basket');
var addBasketOpen = document.querySelectorAll('.buy');
var addBasketClose = addBasket.querySelector('.modal-content-close');
var addBasketCancel = addBasket.querySelector('.continue-purchases');

for (var i=0; i<addBasketOpen.length-1; i++) {
	addBasketOpen[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		addBasket.classList.add("modal-content-show");
	})
};

addBasketClose.addEventListener("click", function (event) {
		event.preventDefault(event);
		addBasket.classList.remove("modal-content-show");
});
addBasketCancel.addEventListener("click", function (event) {
		event.preventDefault(event);
		addBasket.classList.remove("modal-content-show");
});
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (addBasket.classList.contains('modal-content-show')){
			addBasket.classList.remove('modal-content-show');
			};
		};
	});