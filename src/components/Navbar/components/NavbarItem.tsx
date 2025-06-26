import { memo } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavbarItemModel } from '../../../models/navbar.model';

import styles from '../styles/styles.module.scss';

const NavbarItem: React.FC<NavbarItemModel> = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li className={`${styles.navbar__item} ${classProps}`}>
			<HashLink
				smooth
				to={section}
				onClick={e => {
					if (onClick) onClick(e);
				}}
				className={styles['navbar__item-link']}
				{...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};

export default memo(NavbarItem);
