'use strict'

var openWriteToUs	=	document.querySelector('.about-us-btn');
var popupWriteToUs	=	document.querySelector('.modal-content');
var closeWriteToUs	=	popupWriteToUs.querySelector('.modal-content-close');
var mapOpen = document.querySelector('.map a');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-content-close');

openWriteToUs.addEventListener('click',function(event) {
	event.preventDefault();
	popupWriteToUs.classList.add('modal-content-show');
});
closeWriteToUs.addEventListener('click',function(event) {
	event.preventDefault();
	popupWriteToUs.classList.remove('modal-content-show');
});
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (popupWriteToUs.classList.contains('modal-content-show')){
			popupWriteToUs.classList.remove('modal-content-show');
			};
		};
	});

mapOpen.addEventListener('click',function(event) {
	event.preventDefault();
	mapPopup.classList.add('modal-content-show');
});
mapClose.addEventListener('click',function(event) {
	event.preventDefault();
	mapPopup.classList.remove('modal-content-show');
});
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains('modal-content-show')){
			mapPopup.classList.remove('modal-content-show');
			};
		};
	});

var slider = document.querySelector('.top-slider');
var nextSlide = slider.querySelector('.top-slider-control-next');
var prewSlide = slider.querySelector('.top-slider-control-prew');
var slides = slider.querySelectorAll('.slide');
var cIndex = 0;

nextSlide.addEventListener('click', moveRight);
function moveRight() {
	slides[cIndex].classList.remove('slide-show');
	if(cIndex === slides.length-1) {
		cIndex = 0;
		slides[cIndex].classList.add('slide-show');
	}else{
		slides[++cIndex].classList.add('slide-show');
	};
} ;
prewSlide.addEventListener('click', moveRight);
function moveLeft() {
	slides[cIndex].classList.remove('slide-show');
	if(cIndex === 0) {
		cIndex = slides.length-1;
		slides[cIndex].classList.add('slide-show');
	}else{
		slides[--cIndex].classList.add('slide-show');
	};
} ;