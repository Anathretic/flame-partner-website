export const scrollToTop = ({ scrollBehaviour }: { scrollBehaviour: 'auto' | 'smooth' }) => {
	const body = document.querySelector<HTMLElement>('#root');

	if (!body) return;

	if (scrollBehaviour === 'auto') {
		body.style.visibility = 'hidden';
		setTimeout(() => {
			body.scrollIntoView({ behavior: 'auto' });
			body.style.visibility = 'visible';
		}, 75);
	}
	if (scrollBehaviour === 'smooth') body.scrollIntoView({ behavior: 'smooth' });
};
