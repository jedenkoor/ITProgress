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
		if ($(document).scrollTop() > 150 && !$(document).find('.header-burger').hasClass('active') && !$(document).find('.header-search').hasClass('active')) {
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
	$(document).find('.header-searchform, .header-search').toggleClass('active');
	if ($(document).find('.header-searchform').hasClass('active')) {
		$(document).find('.header').css('height', 'auto');
	} else {
		$(document).find('.header').css('height', '84px');
		$(document).find('.header-searchform__input').val('').addClass('empty');
		$(document).find('.header-searchform form svg').show();
	}
	if ($(this).hasClass('active') && document.documentElement.clientWidth < 1025) {
		$('html, body').css({
			'overflow': 'hidden'
		});
	} else {
		$('html, body').css({
			'overflow': 'auto'
		});
	}
});
$(document).on('click touchend', function (e) {
	var div = $('.header-searchform');
	if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0 && !$('.header-search').is(e.target) && $('.header-search').has(e.target).length === 0) {
		div.removeClass('active');
		$('.header-search').removeClass('active');
		$(document).find('.header').css('height', '84px');
		$(document).find('.header-searchform__input').val('').addClass('empty');
		$(document).find('.header-searchform form svg').show();
		if ($('.header-search').hasClass('active')) {
			$('html, body').css({
				'overflow': 'hidden'
			});
		} else {
			$('html, body').css({
				'overflow': 'auto'
			});
		}
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
if (document.documentElement.clientWidth < 768) {
	$(document).on('click', '.header-info-wrap-select-top-col', function (e) {
		if ($(this).hasClass('active')) {
			$(this).closest('.header-info-wrap-select-col').toggleClass('active');
		} else {
			$(this).closest('.header-info-wrap-select-col').removeClass('active');
		}
	});
}
/*Смена города Конец*/


/*Мобильное меню*/
$(document).on('click', '.header-info-wrap, .header-burger', function (e) {
	if (!$('.header-info-wrap__tel').is(e.target) && !$('.header-info-wrap-select').is(e.target) && $('.header-info-wrap-select').has(e.target).length === 0) {
		$(document).find('.header-info-wrap-select').toggleClass('active');
		$(document).find('.header-info-wrap, .header-burger').toggleClass('active');
	} else {
		return
	}
});
$(document).on('click touchend', function (e) {
	var div = $('.header-info-wrap-select');
	if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0 && !$('.header-info-wrap').is(e.target) && $('.header-info-wrap').has(e.target).length === 0 && !$('.header-burger').is(e.target) && $('.header-burger').has(e.target).length === 0) {
		div.removeClass('active');
		$(document).find('.header-burger, .header-info-wrap').removeClass('active');
		if ($('.header-burger').hasClass('active')) {
			$('html, body').css({
				'overflow': 'hidden'
			});
		} else {
			$('html, body').css({
				'overflow': 'auto'
			});
		}
	}
});
if (document.documentElement.clientWidth < 768) {
	$(document).on('click', '.header-burger', function (e) {
		if ($(this).hasClass('active')) {
			$('html, body').css({
				'overflow': 'hidden'
			});
		} else {
			$('html, body').css({
				'overflow': 'auto'
			});
		}
	});
}
/*Мобильное меню Конец*/


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


/*Главная Информация о компании*/
$(document).on('click', '.main-about-wrap-col-item__title', function (e) {
	if (!$(this).hasClass('active')) {
		$(document).find('.main-about-wrap-col-item__title').removeClass('active');
		$(document).find('.main-about-wrap-col-item__text').slideUp();
	}
	$(this).toggleClass('active');
	$(this).next().slideToggle();
});
/*Главная Информация о компании Конец*/


/*Оверлей на карте*/
if (document.documentElement.clientWidth < 768) {
	$(document).on('click', '.contacts-map__overlay', function () {
		$(document).find('.contacts-map__overlay').fadeOut();
	});

	$(document).on('click touchstart', function (e) {
		var div = $('.contacts-map');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(document).find('.contacts-map__overlay').fadeIn();
		}
	});
}
/*Оверлей на карте Конец*/


/*Показать всю команду*/
$(document).on('click', '.team__more', function () {
	$('.team-items').css('max-height', 'none');
	$(this).hide();
});
/*Показать всю команду Конец*/


/*Слайдер 4 элемента*/
if (document.documentElement.clientWidth > 767) {
	$(document).find('.slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
} else {
	$(document).find('.gallery-items.slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}
/*Слайдер 4 элемента Конец*/


/*Динамическая сетка*/
$(document).on('click', '.dropDownlists-items-item', function () {
	$(this).toggleClass('active').find('.dropDownlists-items-item__text').toggle();
	if (document.documentElement.clientWidth > 1200) {
		$grid.masonry('layout');
	}
});
if (document.documentElement.clientWidth > 1200) {
	var $grid = $('.dropDownlists-items').masonry({
		itemSelector: '.dropDownlists-items-item',
	});

	$('.reviews-items').masonry({
		itemSelector: '.reviews-items-item',
	});
}
/*Динамическая сетка Конец*/


/*FAQ*/
$(document).on('click', '.faq-item__title', function () {
	if (!$(this).closest('.faq-item').hasClass('active')) {
		$(document).find('.faq-item__text').slideUp();
		$(document).find('.faq-item').removeClass('active');
	}
	$(this).closest('.faq-item').toggleClass('active');
	$(this).next('.faq-item__text').slideToggle();
});
/*FAQ Конец*/


/*Галеерея в слайдере*/
var slickClone = '.slider a.slick-slide:not(.slick-cloned)';
// Init fancybox, skip cloned elements
$().fancybox({
	selector: slickClone,
	backFocus: false,
	animationEffect: "fade",
	loop: true
});
/*Галеерея в слайдере Конец*/


/*Увеличение/уменьшение*/
$(document).on('click', '.calc-block-top-col-input__minus', function () {
	let inputEl = $(this).next('input');
	if (inputEl.val() > 1) {
		inputEl.val(inputEl.val() - 1);
	}
});
$(document).on('click', '.calc-block-top-col-input__plus', function () {
	let inputEl = $(this).prev('input');
	inputEl.val(parseInt(inputEl.val(), 10) + 1);
});
$(document).on('change', '.calc-block-top-col-input input', function (e) {
	if ($(this).val() == '' || $(this).val() == '0') {
		$(this).val(1);
	}
});
/*Увеличение/уменьшение конец*/


/*Ограничение ввода в поле на странице товара*/
var x = document.getElementsByName("input-vol");
for (i = 0; i < x.length; i++) {
	x[i].onkeypress = function (e) {
		e = e || event;
		if (e.ctrlKey || e.altKey || e.metaKey) return;
		var chr = getChar(e);
		// с null надо осторожно в неравенствах,
		// т.к. например null >= '0' => true
		// на всякий случай лучше вынести проверку chr == null отдельно
		if (chr == null) return;
		if (chr < '0' || chr > '9') {
			return false;
		}
	}
}
function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
		return String.fromCharCode(event.keyCode) // IE
	}

	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
		return String.fromCharCode(event.which) // остальные
	}

	return null; // специальная клавиша
}
/*Ограничения ввода в поле на странице товара конец*/


/*Прокрутка Меню при загрузке до активного пункта*/
let horizontalElem = document.getElementById("horizontalMenu");
if (horizontalElem) {
	let activeElem = document.querySelector('#horizontalMenu .about-menu__item.active'),
		windowWidth = document.documentElement.clientWidth,
		activeElementWidth = activeElem.offsetWidth;
	horizontalElem.scrollLeft += activeElem.offsetLeft - (windowWidth / 2) + (activeElementWidth / 2);
}
/*Прокрутка Меню при загрузке до активного пункта Конец*/