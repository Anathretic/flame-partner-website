import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFooterLinksContext } from '../../hooks/contextHooks/useFooterLinksContext';
import { useCarSelectContext } from '../../hooks/contextHooks/useCarSelectContext';
import ArticlesArray from './components/ArticlesArray';

import styles from './styles/styles.module.scss';

const ArticlesAndAdvices: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();
	const { setSelectedCar } = useCarSelectContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	useEffect(() => {
		setSelectedCar('');
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Artykuły i porady | Flame Partner</title>
				<meta
					name='description'
					content='Porady dla kierowców Bolt, Uber i FreeNow oraz osób wynajmujących auta. Przeczytaj, jak rozpocząć pracę, jakie są wymagania i jak zadbać o komfort jazdy.'
				/>
				<meta property='og:title' content='Artykuły i porady | Flame Partner' />
				<meta
					property='og:description'
					content='Porady dla kierowców Bolt, Uber i FreeNow oraz osób wynajmujących auta. Przeczytaj, jak rozpocząć pracę, jakie są wymagania i jak zadbać o komfort jazdy.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/artykuly-i-porady' />
				<link rel='canonical' href='https://flamepartner.pl/artykuly-i-porady' />
			</Helmet>
			<main className={styles.articles}>
				<div className={styles.articles__container}>
					<div className={styles.articles__wrapper}>
						<div className={styles['articles__hero-image']}>
							<h1 className={styles['articles__hero-image-title']}>Artykuły i porady</h1>
						</div>
						<ArticlesArray />
					</div>
				</div>
				<div className={`${styles['articles__special-block']} ${styles['articles__special-block--left']}`} />
				<div className={`${styles['articles__special-block']} ${styles['articles__special-block--right']}`} />
			</main>
		</>
	);
};

export default ArticlesAndAdvices;
