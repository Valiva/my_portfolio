	
const btnShowMoreCards = document.querySelector('.button__more');
const hiddenCard = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function(){
	hiddenCard.forEach( function(card) {
		card.classList.remove('card-link--hidden');
		})
})

const widgets= document.querySelectorAll('.widget');

widgets.forEach( function(widget) {
	widget.addEventListener('click', function(e){
		if (e.target.classList.contains('sidebar_widget__title')){
			e.target.classList.toggle('widget__title--active');
			e.target.nextElementSibling.classList.toggle('sidebar_widget__body--hidden')
		}

	})
});


const checkBoxAny = document.querySelector('.location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');



checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
			item.checked = false;
		});
    }
})


topLocationCheckboxes.forEach( function(item) {
	item.addEventListener('change', function(){
		checkBoxAny.checked = false;
	})
});


const showMoreOptions = document.querySelector('.button__show-hidden');
const hidCheckb = document.querySelectorAll('.option__checkbox--hidden');

showMoreOptions.onclick = function(){

	if(showMoreOptions.dataset.options == 'hidden'){

		hidCheckb.forEach ( function (item) {
				item.style.display = 'block';
			});
			showMoreOptions.innerText = "Скрыть дополнительные опции";
			showMoreOptions.dataset.options = 'visible';
	}

	else if(showMoreOptions.dataset.options == 'visible'){
			hidCheckb.forEach ( function (item) {
				item.style.display = 'none';
			});
			showMoreOptions.innerText = "Показать еще";
			showMoreOptions.dataset.options = 'hidden';
	}
};
