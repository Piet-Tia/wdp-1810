$('.star-rank').click(function () {
	$(this).removeClass('star-outline not-hover hover');
	$(this).siblings().removeClass('star-outline not-hover hover');
	
	$(this).addClass('star-full');
	$(this).siblings().addClass('star-full');
	
	$(this).prevAll().removeClass('star-full').addClass('star-outline');
})
