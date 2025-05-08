import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import NotFoundImage from '../../images/notfound-subpage/notfound-image.png';

import styles from './styles/styles.module.scss';

const PageNotFound: React.FC = () => {
	const currentUrl = window.location.href;

	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Strona nie znaleziona | Flame Partner</title>
				<meta
					name='description'
					content='Ups! Wygląda na to, że ta strona nie istnieje. Sprawdź adres lub wróć na stronę główną.'
				/>
				<meta property='og:title' content='Strona nie znaleziona | Flame Partner' />
				<meta property='og:description' content='Nie znaleziono strony. Przekieruj się do naszej oferty.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
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
		</>
	);
};

export default PageNotFound;
