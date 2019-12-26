/*Контакты Табы карты*/
var mapTabContainers = $(document).find('.contacts-map-tab');
$(document).on('click', '.contacts-info-row__address', function (e) {
	e.preventDefault();
	mapTabContainers.hide();
	mapTabContainers.filter(this.hash).show();
});
/*Контакты Табы карты Конец*/