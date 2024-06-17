let swiper = new Swiper('.photo__grid', {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.photo__button_right',
		prevEl: '.photo__button_left',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});
