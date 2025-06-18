import { Fancybox } from '@fancyapps/ui'
import "@fancyapps/ui/dist/fancybox/fancybox.css"

export function galleryLightbox() {
	Fancybox.bind('[data-fancybox="gallery"]', {})
}