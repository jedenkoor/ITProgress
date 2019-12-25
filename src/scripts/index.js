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


/*Главная Табы направления разработки*/
var waysTabContainers = $(document).find('.main-ways-tabs-tab');
$(document).on('click', '.main-ways-tabs-navigation__item', function (e) {
	e.preventDefault();
	waysTabContainers.hide();
	waysTabContainers.filter(this.hash).show().css('display', 'grid');
	$(document).find('.main-ways-tabs-navigation__item').removeClass('active');
	$(this).addClass('active');
});
/*Главная Табы направления разработки Конец*/