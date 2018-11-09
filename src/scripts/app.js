$('.star-rank').click(function () {
	$(this).removeClass('star-full star-outline not-hover hover');
	$(this).siblings().removeClass('star-full star-outline not-hover hover');
	
	$(this).addClass('star-full');
	$(this).nextAll().addClass('star-full');
	$(this).prevAll().addClass('star-outline');
})

const furnitureSlider = document.getElementById("furniture-slider");
const furnitureSliderDots = document.getElementById("dots");


const slider = tns({
    container: furnitureSlider,
    items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	autoplayButtonOutput: false,
	navContainer: furnitureSliderDots,
	mouseDrag: true,
	responsive: {
		576: {
		  items: 2
		},
		768: {
		  items: 3
		},
		1200: {
		  items: 4
		}
	}
	
  });


tns();
