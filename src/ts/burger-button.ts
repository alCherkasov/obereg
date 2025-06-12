export function BurgerButton(): void {
	const burgerButton: HTMLElement | null = document.getElementById('burger')
	const nav: HTMLElement | null = document.querySelector('.header__nav')

	burgerButton?.addEventListener('click', () => {
		burgerButton?.classList.toggle('burger--active')
		nav?.classList.toggle('header__nav--open')
		console.log(nav)
	})
}