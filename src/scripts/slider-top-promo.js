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
image.src = leftSlideList[activeSlide].img;
changeDot(); 
};

//ustaw interval
let IndexInterval = setInterval(changeSlide, time);

//funkcja zmiany slajdu po kliknięciu w dot i ustawienie aktywnego doda
function dotsChangeSlide () {
	clearInterval(IndexInterval); //zatrzymaj interval
	var dotAtribute = event.target.getAttribute("data-move"); //pobierz kliknięty dot
	const activeDot = dots.findIndex(dot => dot.classList.contains('active')); //ustal index aktywnego dot
	dots[activeDot].classList.remove('active'); 
	dots[dotAtribute-1].classList.add('active'); 
	image.src = leftSlideList[dotAtribute-1].img; //ustaw zdjęcie
	activeSlide = dotAtribute-1; //ustaw slajd na aktualny po uruchomieniu interval
	IndexInterval = setInterval(changeSlide, time); //uruchom ponownie interval
}

//czekaj na kliknęcie w dot i wywował funckję
var topDots = document.querySelectorAll('.topDot');
	for(var i = 0; i < topDots.length; i++){
		topDots[i].addEventListener('click', function(event) { 
        dotsChangeSlide();
        });
    }


//Prawy slajder
const RightSildeList = [{
	img: "./images/blog_01.png",
},
{
	img: "./images/blog_02.png",
},
{
	img: "./images/blog_03.png",
}];

let ActiveRightPhoto = 0; //pierwsze aktywne zdjęcie
const imageRight = document.querySelector('img.slider-right');

//czekaj na kliknęcie w lewą strzałkę i wywowałaj funckję 
var LeftButton = document.querySelector('.left-button');
LeftButton.addEventListener('click', function(event) { 
	ActiveRightPhoto--;
	ChangeLeftSlide();
});

//czekaj na kliknęcie w prawą strzałkę i wywowałaj funckję 
var RightButton = document.querySelector('.right-button');
RightButton.addEventListener('click', function(event) {
	ActiveRightPhoto++; 
    ChangeRightSlide();
});

function ChangeLeftSlide() {
	if (ActiveRightPhoto < 0) {
		ActiveRightPhoto = 2;
	}
	imageRight.src = RightSildeList[ActiveRightPhoto].img;
}

function ChangeRightSlide() {
	if (ActiveRightPhoto > 2) {
		ActiveRightPhoto = 0;
	}
	imageRight.src = RightSildeList[ActiveRightPhoto].img;
}

});
