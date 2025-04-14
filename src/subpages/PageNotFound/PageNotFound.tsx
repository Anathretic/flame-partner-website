import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import NotFoundImage from '../../images/notfound-subpage/notfound-image.png';

import styles from './styles/styles.module.scss';

const PageNotFound: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<main className={styles.notfound}>
			<section className={styles.notfound__container}>
				<img className={styles.notfound__img} src={NotFoundImage} alt='Obrazek informujący o braku strony' />
				<h1 className={styles.notfound__credits}>Ups! Strony nie znaleziono..</h1>
				<Link to='/' className={styles.notfound__btn} onClick={scrollToTop} aria-label='Powrót na stronę główną'>
					Powrót
				</Link>
			</section>
			<div className={`${styles['notfound__special-block']} ${styles['notfound__special-block--left']}`} />
			<div className={`${styles['notfound__special-block']} ${styles['notfound__special-block--right']}`} />
		</main>
	);
};

export default PageNotFound;
