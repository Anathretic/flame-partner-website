import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

export const NavbarSpecialDesktopButton: React.FC = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname === '/' && (
				<li className={styles.navbar__item}>
					<Link to='/rekrutacja-kierowcow' onClick={scrollToTop} className={`${styles['navbar__special-item-link']}`}>
						Aplikuj
					</Link>
				</li>
			)}
		</>
	);
};
