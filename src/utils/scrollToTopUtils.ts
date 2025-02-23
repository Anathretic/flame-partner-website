export const scrollToTop = ({ scrollBehaviour }: { scrollBehaviour: 'auto' | 'smooth' }) => {
	const body = document.querySelector('#root');
	body?.scrollIntoView({ behavior: `${scrollBehaviour}` });
};
