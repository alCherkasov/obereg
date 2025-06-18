import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export function galleryCarousel() {
	return new Swiper('.gallery__swiper', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 16,
		breakpoints: {
			867: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		},
		pagination: {
    	el: '.swiper-pagination',
  	},
  	navigation: {
   		nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},
	})
}