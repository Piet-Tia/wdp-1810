// function for freezing star rating of products after mouse click

$('.star-rank').click(function () {
	$(this).removeClass('star-full star-outline not-hover hover');
	$(this).siblings().removeClass('star-full star-outline not-hover hover');

	$(this).addClass('star-full');
	$(this).nextAll().addClass('star-full');
	$(this).prevAll().addClass('star-outline');
})

//end of function for freezing star rating of products after mouse click


// sliders for furniture section

const DOM = {};
DOM.furnitureBedSlider = document.getElementById("furniture-bed-slider"); // this gives an error when using jQuery, at the line: "let furnitureBedSlider = tns({" saying "Uncaught TypeError: Cannot read property 'clientWidth' of undefined" WHY ??
DOM.furnitureChairSlider = document.getElementById("furniture-chair-slider");
DOM.furnitureSliderDots = document.getElementById("dots");
DOM.furnitureBedSliderSpace = $('#furniture-bed-slider-space');
DOM.furnitureChairSliderSpace = $('#furniture-chair-slider-space');

let slider;

function toggleHiddenClass(item){
	item.toggleClass('furniture-slider-hidden');
}

function goToFirstSlide(){
	furnitureBedSlider.goTo(0);
}

function destroySlider(slider){
	slider.destroy();
}

function rebuildSlider(slider){
	slider = slider.rebuild();
}

// DEBUGGING BELOW
$('#destroy1').click(function(){
	slider1.destroy();
})

$('#rebuild1').click(function(){
	slider1 = slider1.rebuild();
})

$('#hide1').click(function(){
	DOM.furnitureBedSliderSpace.toggleClass('furniture-slider-gone');
})

$('#build1').click(function(){
	slider1 = tns({
		container: DOM.furnitureBedSlider,
		items: 1,
		slideBy: 'page',
		controls: false,
		autoplay: false, // should be set to true
		autoplayButtonOutput: false,
		navContainer: DOM.furnitureSliderDots,
		mouseDrag: true,
		responsive: {
			576: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
})

$('#destroy2').click(function(){
	slider2.destroy();
})

$('#rebuild2').click(function(){
	slider2 = slider2.rebuild();
})

$('#hide2').click(function(){
	DOM.furnitureChairSliderSpace.toggleClass('furniture-slider-gone');
})

$('#build2').click(function(){
	slider2 = tns({
		container: DOM.furnitureChairSlider,
		items: 1,
		slideBy: 'page',
		controls: false,
		autoplay: false, // should be set to true
		autoplayButtonOutput: false,
		navContainer: DOM.furnitureSliderDots,
		mouseDrag: true,
		responsive: {
			576: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
})
