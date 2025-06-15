import Swiper from 'swiper'
import 'swiper/css'

export function productsCarousel() {
	new Swiper('.swiper', {
		loop: true,
		autoplay: {
			delay: 3000
		},
		spaceBetween: 16,
		slidesPerView: 2,
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
