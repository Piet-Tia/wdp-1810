const DOM = {};

DOM.furnitureSlider = document.getElementById("furniture-slider");
DOM.furnitureSliderDots = document.getElementById("furniture-dots");

DOM.blogSlider = document.getElementById("blog-slider");
DOM.blogSliderDots = document.getElementById("blog-dots");

const furnitureSectionSlider = tns({
	container: DOM.furnitureSlider,
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

furnitureSectionSlider();
blogSectionSlider();
