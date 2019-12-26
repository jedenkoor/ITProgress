/*Def скрипты*/
if (document.title == 'Главная') {
	$(document).find('.breadcrumbs').hide();
}
if (document.title == 'Карта сайта') {
	$(document).find('.breadcrumbs, .header, .footer').hide();
}
/*Def скрипты Конец*/


/*Поведение хедера*/
var directionScroll = [];
$(document).on('scroll', function (e) {
	directionScroll.push($(document).scrollTop());
	if (directionScroll[0] < directionScroll[1]) {
		directionScroll = directionScroll.slice(0, 0);
		if ($(document).scrollTop() > 150) {
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
	if ($(document).find('.header-searchform').hasClass('active')) {
		$(document).find('.header').css('height', 'auto');
	} else {
		$(document).find('.header').css('height', '84px');
		$(document).find('.header-searchform__input').val('').addClass('empty');
		$(document).find('.header-searchform form svg').show();
	}
});
$(document).on('click touchend', function (e) {
	var div = $('.header-searchform');
	if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0 && !$('.header-search').is(e.target) && $('.header-search').has(e.target).length === 0) {
		div.removeClass('active');
		$(document).find('.header').css('height', '84px');
		$(document).find('.header-searchform__input').val('').addClass('empty');
		$(document).find('.header-searchform form svg').show();
	}
});
function resizable(el, factor) {
	var int = Number(factor) || 7.7;
	function resize() { el.style.width = ((el.value.length + 1) * int) + 'px' }
	var e = 'keyup,keypress,focus,blur,change,input'.split(',');
	for (var i in e) el.addEventListener(e[i], resize, false);
	resize();
}
resizable(document.getElementById('txt'), 12);
$(document).on('input', '.header-searchform__input', function (e) {
	if ($(this).val() != '') {
		$(this).removeClass('empty');
		$(this).siblings('svg').hide();
	} else {
		$(this).addClass('empty');
		$(this).siblings('svg').show();
	}
});

/*Поиск Конец*/


/*Смена города*/
$(document).on('click', '.header-info-wrap-select-top-col', function (e) {
	if (!$(this).hasClass('active')) {
		$(document).find('.header-info-wrap-select-top-col').removeClass('active');
		$(this).addClass('active');
	}
});
/*Смена города Конец*/


/*Табы*/
$(document).on('click', '.tabs-navigation-item', function (e) {
	e.preventDefault();
	let tabContainers = $(this).closest('.tabs').find('.tabs-tab');
	tabContainers.hide();
	tabContainers.filter(this.hash).show();
	$(this).closest('.tabs').find('.tabs-navigation-item').removeClass('active');
	$(this).addClass('active');
});
/*Табы Конец*/