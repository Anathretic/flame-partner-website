export const scrollToTop = (id: string) => {
	const body = document.querySelector('#root');
	body?.scrollIntoView({ behavior: 'smooth' });

	if (id) {
		setTimeout(() => {
			window.history.replaceState(null, '', `#${id}`);
		}, 250);
	}
};
