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