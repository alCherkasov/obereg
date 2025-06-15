export function header():void {
	const logo = document.querySelector('.header__logo')
	const headerElement: HTMLElement | null = document.querySelector('.header')
	window.addEventListener('scroll', () => {
		const posTop: number = window.pageYOffset
			if(posTop > 100) {
				headerElement?.classList.add('header--shadow')
				logo?.classList.add('header__logo--small')
		} else {
			headerElement?.classList.remove('header--shadow')
			logo?.classList.remove('header__logo--small')
		}
	})
}