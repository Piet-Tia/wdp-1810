'use strict';
$(function() {

//lewa slider
const leftSlideList = [{
	img: "./images/photo-fur01.png",
},
{
	img: "./images/photo-fur02.png",
},
{
	img: "./images/photo-fur03.png",
}];

const image = document.querySelector('img.slider-left');
const dots = [...document.querySelectorAll('.dots-promo a')]

const time = 3000;
let activeSlide = 0;

//create left slider in html
const imageLeft = document.createElement('img');
imageLeft.setAttribute("class", "slider-left" );
imageLeft.src = leftSlideList[activeSlide].img
var firstElement = document.querySelector('.section-promo .product-box .photo');
firstElement.insertBefore(imageLeft, firstElement.firstChild);

//funkcja zmieniająca aktywną kropkę w hederze
const changeDot = () => {
	let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
	dots[activeDot].classList.remove('active');
	dots[activeSlide].classList.add('active');
}

//funkcja zmieniająca automatycznie slajd
const changeSlide = () => {
	activeSlide++;
	if (activeSlide === leftSlideList.length) {
		activeSlide = 0;
}
imageLeft.src = leftSlideList[activeSlide].img;
changeDot(); 
};

//ustaw interval
let indexInterval = setInterval(changeSlide, time);

//funkcja zmiany slajdu po kliknięciu w dot i ustawienie aktywnego doda
function dotsChangeSlide () {
	clearInterval(indexInterval); //zatrzymaj interval
	var dotAtribute = event.target.getAttribute("data-move"); //pobierz kliknięty dot
	const activeDot = dots.findIndex(dot => dot.classList.contains('active')); //ustal index aktywnego dot
	dots[activeDot].classList.remove('active'); 
	dots[dotAtribute-1].classList.add('active'); 
	imageLeft.src = leftSlideList[dotAtribute-1].img; //ustaw zdjęcie
	activeSlide = dotAtribute-1; //ustaw slajd na aktualny po uruchomieniu interval
	indexInterval = setInterval(changeSlide, time); //uruchom ponownie interval
}

//czekaj na kliknęcie w dot i wywował funckję
var topDots = document.querySelectorAll('.topDot');
	for(var i = 0; i < topDots.length; i++){
		topDots[i].addEventListener('click', function(event) { 
        dotsChangeSlide();
        });
    }


//Prawy slajder
const rightSildeList = [{
	img: "./images/blog_01.png",
},
{
	img: "./images/blog_02.png",
},
{
	img: "./images/blog_03.png",
}];

let activeRightPhoto = 0; //pierwsze aktywne zdjęcie

//create right slider in html
const imageRight = document.createElement('img');
imageRight.setAttribute("class", "slider-right" );
imageRight.src = rightSildeList[activeRightPhoto].img
var firstElement = document.querySelector('.section-promo .promo-slide .photo');
firstElement.insertBefore(imageRight, firstElement.firstChild);

//czekaj na kliknęcie w lewą strzałkę i wywowałaj funckję 
var leftButton = document.querySelector('.left-button');
leftButton.addEventListener('click', function(event) { 
	activeRightPhoto--;
	changeLeftSlide();
});

//czekaj na kliknęcie w prawą strzałkę i wywowałaj funckję 
var rightButton = document.querySelector('.right-button');
rightButton.addEventListener('click', function(event) {
	activeRightPhoto++; 
    changeRightSlide();
});

function changeLeftSlide() {
	if (activeRightPhoto < 0) {
		activeRightPhoto = 2;
	}
	imageRight.src = rightSildeList[activeRightPhoto].img;
}

function changeRightSlide() {
	if (activeRightPhoto > 2) {
		activeRightPhoto = 0;
	}
	imageRight.src = rightSildeList[activeRightPhoto].img;
}

});
