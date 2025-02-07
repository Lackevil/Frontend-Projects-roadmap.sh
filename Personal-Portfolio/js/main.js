const button = document.getElementById('theme-toggle')
button.addEventListener('click', () => {
	const html = document.documentElement
	const currentTheme = html.getAttribute('data-theme')
	const newTheme = currentTheme === 'light' ? 'dark' : 'light'

	// Меняем тему
	html.setAttribute('data-theme', newTheme)

	// Меняем цвет границ в зависимости от темы
	document.querySelectorAll('*').forEach(el => {
		if (getComputedStyle(el).borderStyle !== 'none') {
			el.style.borderColor = newTheme === 'dark' ? 'white' : 'black'
		}
	})
})
