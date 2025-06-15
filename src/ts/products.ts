import Swiper from 'swiper'
import 'swiper/css'

export function productsCarousel() {
	new Swiper('.swiper', {
		spaceBetween: 16,
		slidesPerView: 2,
		loop: true,
		breakpoints: {
			868: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			1120: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
		},
	})
}
