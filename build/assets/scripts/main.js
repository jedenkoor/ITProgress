/*Поведение хедера*/
var directionScroll = [];
$(document).on('scroll', function (e) {
	directionScroll.push($(document).scrollTop());
	if (directionScroll[0] < directionScroll[1]) {
		directionScroll = directionScroll.slice(0, 0);
		if ($(document).scrollTop() > 50) {
			$(document).find('.header').removeClass('visible');
		}
	}
	if (directionScroll[0] > directionScroll[1]) {
		directionScroll = directionScroll.slice(0, 0);
		$(document).find('.header').addClass('visible');
	}
});
/*Поведение хедера Конец*/


/*Поиск*/
$(document).on('click', '.header-search', function (e) {
	$(document).find('.header-searchform').toggleClass('active');
});
$(document).on('click touchend', function (e) {
	var div = $('.header-searchform');
	if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0 && !$('.header-search').is(e.target) && $('.header-search').has(e.target).length === 0) {
		div.removeClass('active');
	}
});
/*Поис Конец*/