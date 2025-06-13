export const scrollToTop = (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
	if (e?.ctrlKey) return;

	const body = document.querySelector<HTMLElement>('#root');

	if (!body) return;
	setTimeout(() => {
		body.scrollIntoView({ behavior: 'smooth' });
	}, 50);
};
