export function SocialsModal() {
	const button: HTMLElement | null = document.getElementById('hero-button')
	const modal: HTMLElement | null = document.getElementById('socials-modal')
	const body: HTMLElement | null = document.querySelector('body')
	
	button?.addEventListener('click', (e) => {
		e.stopPropagation()
		modal?.classList.toggle('socials-modal--open')
	})

	body?.addEventListener('click', (e) => {
		if (!modal?.classList.contains('socials-modal--open')) return

		const target = e.target as Node
		console.log(target)

		if (!modal.contains(target) && target !== button) {
			modal.classList.remove('socials-modal--open')
		}
	})

	modal?.addEventListener('click', (event) => {
		event.stopPropagation()
	})
}