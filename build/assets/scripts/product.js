/*Страница продукта Табы описания*/
var descrTabContainers = $(document).find('.product-main-col-tab');
$(document).on('click', '.product-main-col-navigation__item', function (e) {
	e.preventDefault();
	descrTabContainers.hide();
	descrTabContainers.filter(this.hash).show();
	$(document).find('.product-main-col-navigation__item').removeClass('active');
	$(this).addClass('active');
});
/*Страница продукта Табы описания Конец*/