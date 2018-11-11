$('.star-rank').click(function () {
	$(this).removeClass('star-full star-outline not-hover hover');
	$(this).siblings().removeClass('star-full star-outline not-hover hover');
	
	$(this).addClass('star-full');
	$(this).nextAll().addClass('star-full');
	$(this).prevAll().addClass('star-outline');
})
