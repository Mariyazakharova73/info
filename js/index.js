let swiper = new Swiper('.photo__grid', {
	slidesPerView: 1,
	spaceBetween: 15,
	// pagination: {
	// 	el: '.gallery-pagination',
	// 	type: 'fraction',
	// },
	navigation: {
		nextEl: '.slider-button_right',
		prevEl: '.slider-button_left',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	},
});
