import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';
import { NavbarItem } from './components/NavbarItem';
import { navbarItems } from './components/navbarData/navbarItems';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

const Navbar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);

		setTimeout(() => {
			setIsAnimating(false);
		}, 480);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	const handleScroll = () => {
		if (window.scrollY > 80) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className='header'>
			<div className={`header__container ${isScrolled ? 'header__container--is-scrolled' : ''}`}>
				<div className='header__title'>
					<div className='header__title-box'>
						<HashLink className='header__title-text' to='/#'>
							<h2>flame</h2>
						</HashLink>
					</div>
				</div>
				{isMobile ? (
					<>
						<HiMenuAlt4 className='navbar__mobile-burger-btn' fontSize={32} onClick={() => setToggleMenu(true)} />
						{(toggleMenu || isAnimating) && (
							<nav className='navbar__mobile'>
								<ul
									onAnimationEnd={handleAnimationEnd}
									className={`navbar__mobile-list ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}>
									<li className='navbar__mobile-exit-icon'>
										<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
									</li>
									{navbarItems.map(({ title, section }) => (
										<NavbarItem
											key={title}
											title={title}
											section={section}
											classProps={'navbar__item-margin'}
											onClick={handleMenuClose}
										/>
									))}
								</ul>
							</nav>
						)}
					</>
				) : (
					<nav className='navbar__desktop'>
						<ul className='navbar__desktop-list'>
							{navbarItems.map(({ title, section }) => (
								<NavbarItem key={title} title={title} section={section} />
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navbar;
