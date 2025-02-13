import { useEffect } from 'react';
import { NavbarTitleModel } from '../../../models/navbar.model';

import BlackLogoImg from '../../../images/logo-images/black-logo.png';
import WhiteLogoImg from '../../../images/logo-images/white-logo.png';

export const NavbarTitle: React.FC<NavbarTitleModel> = ({ divRef, isScrolled }) => {
	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => scrollToTop, []);

	return (
		<div className='navbar__title' onClick={scrollToTop}>
			<div className='navbar__title-box'>
				<h2 className='navbar__title-text'>
					<img src={isScrolled ? BlackLogoImg : WhiteLogoImg} alt='Logo firmy przenoszącę na początek strony' />
				</h2>
			</div>
		</div>
	);
};
