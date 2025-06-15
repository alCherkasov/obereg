export function BurgerButton(): void {
	const burgerButton: HTMLElement | null = document.getElementById('burger')
	const nav: HTMLElement | null = document.querySelector('.header__nav')

	burgerButton?.addEventListener('click', (e) => {
		e.stopPropagation()
		burgerButton?.classList.toggle('burger--active')
		nav?.classList.toggle('header__nav--open')
	})

	document.addEventListener('click', (e) => {
		if(!nav?.classList.contains('header__nav--open')) return

		const target = e.target as Node

		if(!nav.contains(target)) {
			nav.classList.remove('header__nav--open')
			burgerButton?.classList.remove('burger--active')
		}
	})
}