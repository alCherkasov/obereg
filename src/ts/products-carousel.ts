import Swiper from 'swiper/bundle'
import 'swiper/css'

export function productsCarousel() {
	new Swiper('.swiper', {
		loop: true,
		autoplay: true,
		spaceBetween: 16,
		slidesPerView: 2,
		breakpoints: {
			649: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			1119: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
		},
	})
}
