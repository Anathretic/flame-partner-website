import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import throttle from 'lodash/throttle';
import NavbarItem from './components/NavbarItem';
import { NavbarTitle } from './components/NavbarTitle';
import { navbarItems } from './components/navbarData/navbarItems';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

const Navbar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const divRef = useRef<HTMLDivElement | null>(null);

	const memoizedNavbarItems = useMemo(() => navbarItems, []);

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);

		setTimeout(() => {
			setIsAnimating(false);
		}, 450);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 30);
		}, 100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header ref={divRef}>
			<div className={styles.navbar}>
				<div
					className={`${styles.navbar__container} ${
						isScrolled ? styles['navbar__container--is-scrolled'] : styles['navbar-is-not-scrolled']
					}`}>
					<div className={styles.navbar__wrapper}>
						<NavbarTitle divRef={divRef} isScrolled={isScrolled} />
						{isMobile ? (
							<>
								<HiMenuAlt4
									className={styles['navbar__mobile-burger-btn']}
									fontSize={32}
									onClick={() => setToggleMenu(true)}
								/>
								{(toggleMenu || isAnimating) && (
									<nav className={styles.navbar__mobile}>
										<ul
											onAnimationEnd={handleAnimationEnd}
											className={`${styles['navbar__mobile-list']} ${
												toggleMenu ? animations['animate-slide-in'] : animations['animate-slide-out']
											}`}>
											<li className={styles['navbar__mobile-exit-icon']}>
												<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
											</li>
											{memoizedNavbarItems.map(({ title, section }) => (
												<NavbarItem
													key={title}
													title={title}
													section={section}
													classProps={styles['navbar__item-margin']}
													onClick={handleMenuClose}
												/>
											))}
										</ul>
									</nav>
								)}
							</>
						) : (
							<nav className={styles.navbar__desktop}>
								<ul className={styles['navbar__desktop-list']}>
									{memoizedNavbarItems.map(({ title, section }) => (
										<NavbarItem key={title} title={title} section={section} />
									))}
								</ul>
							</nav>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
