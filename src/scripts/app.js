
const DOM = {};
DOM.furnitureBedSlider = document.getElementById("furniture-bed-slider");
DOM.furnitureSliderDots = document.getElementById("dots");



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
let furnitureBedSlider = tns({
	container: DOM.furnitureBedSlider,
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
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

$('#destroy').click(function(){
	furnitureBedSlider.destroy();
})

$('#rebuild').click(function(){
	furnitureBedSlider = furnitureBedSlider.rebuild();
})

$('#info').click(function(){
	console.log(furnitureBedSlider.getInfo().navContainer);
})
// end of sliders for furniture section
