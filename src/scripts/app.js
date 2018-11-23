const DOM = {}; // object containing variables for DOM calls


// \/ freezing star rating of products after mouse click \/

$('.star-rank').click(function () {
	$(this).removeClass('star-full star-outline not-hover hover');
	$(this).siblings().removeClass('star-full star-outline not-hover hover');

	$(this).addClass('star-full');
	$(this).nextAll().addClass('star-full');
	$(this).prevAll().addClass('star-outline');
})
//end of function for freezing star rating of products after mouse click (8 lines)



// \/ FURNITURE SECTION SLIDERS \/


DOM.furnitureDots = $(".furniture-dots");
DOM.furnitureSliders = $(".furniture-slider")

DOM.furnitureBedSliderSpace = $('#furniture-bed-slider-space');
DOM.furnitureBedSlider = document.getElementById("furniture-bed-slider"); // this gives an error when using jQuery, at the line: "let furnitureBedSlider = tns({" saying "Uncaught TypeError: Cannot read property 'clientWidth' of undefined" WHY ??
DOM.furnitureBedSliderDotsSpace = $('#furniture-bed-dots-space');
DOM.furnitureBedSliderDots = document.getElementById("furniture-bed-dots");

DOM.furnitureChairSliderSpace = $('#furniture-chair-slider-space');
DOM.furnitureChairSlider = document.getElementById("furniture-chair-slider");
DOM.furnitureChairSliderDotsSpace = $('#furniture-chair-dots-space');
DOM.furnitureChairSliderDots = document.getElementById("furniture-chair-dots");

DOM.furnitureSofaSliderSpace = $('#furniture-sofa-slider-space');
DOM.furnitureSofaSlider = document.getElementById("furniture-sofa-slider");
DOM.furnitureSofaSliderDotsSpace = $('#furniture-sofa-dots-space');
DOM.furnitureSofaSliderDots = document.getElementById("furniture-sofa-dots");

DOM.furnitureTableSliderSpace = $('#furniture-table-slider-space');
DOM.furnitureTableSlider = document.getElementById("furniture-table-slider");
DOM.furnitureTableSliderDotsSpace = $('#furniture-table-dots-space');
DOM.furnitureTableSliderDots = document.getElementById("furniture-table-dots");

DOM.furnitureDiningSliderSpace = $('#furniture-dining-slider-space');
DOM.furnitureDiningSlider = document.getElementById("furniture-dining-slider");
DOM.furnitureDiningSliderDotsSpace = $('#furniture-dining-dots-space');
DOM.furnitureDiningSliderDots = document.getElementById("furniture-dining-dots");


// \/ creating separate sliders for each furniture tab \/

const sliderBed = tns({
	container: DOM.furnitureBedSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.furnitureBedSliderDots,
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

const sliderChair = tns({
	container: DOM.furnitureChairSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.furnitureChairSliderDots,
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

const sliderSofa = tns({
	container: DOM.furnitureSofaSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.furnitureSofaSliderDots,
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

const sliderTable = tns({
	container: DOM.furnitureTableSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.furnitureTableSliderDots,
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

const sliderDining = tns({
	container: DOM.furnitureDiningSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.furnitureDiningSliderDots,
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

// /\ end of creating sliders /\

function goToFirstSlide(slider){
	slider.goTo(0);
	slider.pause();
	slider.play();
}

// \/ switching furniture tabs \/

$('#furniture-tab-bed').click(function(){
	$('.furniture-tab').removeClass('active');
	$(this).addClass('active'); // switches underscore in tab name to new tab

	DOM.furnitureDots.addClass('furniture-slider-hidden');
	DOM.furnitureSliders.addClass('furniture-slider-hidden'); // adds opacity 0 with transition 250
	
	setTimeout(function(){
		goToFirstSlide(sliderBed); // moves to first slide and resets countdown
		DOM.furnitureDots.addClass('furniture-slider-gone');
		DOM.furnitureSliders.addClass('furniture-slider-gone'); // display none to all
		DOM.furnitureBedSliderSpace.removeClass('furniture-slider-gone');
		DOM.furnitureBedSliderDotsSpace.removeClass('furniture-slider-gone'); // removes display none from active (new) slider
	},250);
	
	setTimeout(function(){
		DOM.furnitureBedSliderDotsSpace.removeClass('furniture-slider-hidden');
		DOM.furnitureBedSliderSpace.removeClass('furniture-slider-hidden'); // restores opacity 1 with transition 250
	},300);
})

$('#furniture-tab-chair').click(function(){
	$('.furniture-tab').removeClass('active');
	$(this).addClass('active');

	DOM.furnitureDots.addClass('furniture-slider-hidden');
	DOM.furnitureSliders.addClass('furniture-slider-hidden');
	
	setTimeout(function(){
		goToFirstSlide(sliderChair);
		DOM.furnitureDots.addClass('furniture-slider-gone');
		DOM.furnitureSliders.addClass('furniture-slider-gone');
		DOM.furnitureChairSliderSpace.removeClass('furniture-slider-gone');
		DOM.furnitureChairSliderDotsSpace.removeClass('furniture-slider-gone');
	},250);
	
	setTimeout(function(){
		DOM.furnitureChairSliderDotsSpace.removeClass('furniture-slider-hidden');
		DOM.furnitureChairSliderSpace.removeClass('furniture-slider-hidden');
	},300);
})

$('#furniture-tab-sofa').click(function(){
	$('.furniture-tab').removeClass('active');
	$(this).addClass('active');

	DOM.furnitureDots.addClass('furniture-slider-hidden');
	DOM.furnitureSliders.addClass('furniture-slider-hidden');
	
	setTimeout(function(){
		goToFirstSlide(sliderSofa);
		DOM.furnitureDots.addClass('furniture-slider-gone');
		DOM.furnitureSliders.addClass('furniture-slider-gone');
		DOM.furnitureSofaSliderSpace.removeClass('furniture-slider-gone');
		DOM.furnitureSofaSliderDotsSpace.removeClass('furniture-slider-gone');
	},250);
	
	setTimeout(function(){
		DOM.furnitureSofaSliderDotsSpace.removeClass('furniture-slider-hidden');
		DOM.furnitureSofaSliderSpace.removeClass('furniture-slider-hidden');
	},300);
})

$('#furniture-tab-table').click(function(){
	$('.furniture-tab').removeClass('active');
	$(this).addClass('active');

	DOM.furnitureDots.addClass('furniture-slider-hidden');
	DOM.furnitureSliders.addClass('furniture-slider-hidden');
	
	setTimeout(function(){
		goToFirstSlide(sliderTable);
		DOM.furnitureDots.addClass('furniture-slider-gone');
		DOM.furnitureSliders.addClass('furniture-slider-gone');
		DOM.furnitureTableSliderSpace.removeClass('furniture-slider-gone');
		DOM.furnitureTableSliderDotsSpace.removeClass('furniture-slider-gone');
	},250);
	
	setTimeout(function(){
		DOM.furnitureTableSliderDotsSpace.removeClass('furniture-slider-hidden');
		DOM.furnitureTableSliderSpace.removeClass('furniture-slider-hidden');
	},300);
})

$('#furniture-tab-dining').click(function(){
	$('.furniture-tab').removeClass('active');
	$(this).addClass('active');

	DOM.furnitureDots.addClass('furniture-slider-hidden');
	DOM.furnitureSliders.addClass('furniture-slider-hidden');
	
	setTimeout(function(){
		goToFirstSlide(sliderDining);
		DOM.furnitureDots.addClass('furniture-slider-gone');
		DOM.furnitureSliders.addClass('furniture-slider-gone');
		DOM.furnitureDiningSliderSpace.removeClass('furniture-slider-gone');
		DOM.furnitureDiningSliderDotsSpace.removeClass('furniture-slider-gone');
	},250);
	
	setTimeout(function(){
		DOM.furnitureDiningSliderDotsSpace.removeClass('furniture-slider-hidden');
		DOM.furnitureDiningSliderSpace.removeClass('furniture-slider-hidden');
	},300);
})

// /\ end of switching furniture tabs /\ 

// /\ END OF FURNITURE SECTION SLIDERS /\



// \/ SLIDER FOR BLOG SECTION \/



DOM.blogSlider = document.getElementById("blog-slider");
DOM.blogSliderDots = document.getElementById("blog-dots");

const blogSectionSlider = tns({
	container: DOM.blogSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: DOM.blogSliderDots,
	mouseDrag: true,
	responsive: {
		576: {
			items: 2
		},
		992: {
			items: 3
		}
	}

});
