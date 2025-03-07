export const scrollToTop = () => {
	const body = document.querySelector<HTMLElement>('#root');

	if (!body) return;
	setTimeout(() => {
		body.scrollIntoView({ behavior: 'smooth' });
	}, 50);
};
