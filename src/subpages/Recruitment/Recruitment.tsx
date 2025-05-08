import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { RecruitmentBenefits, RecruitmentForm, RecruitmentBanner } from './components';

import styles from './styles/styles.module.scss';

const Recruitment: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Rekrutacja kierowców | Flame Partner</title>
				<meta
					name='description'
					content='Dołącz do naszego zespołu jako kierowca Uber, Bolt lub FreeNow. Oferujemy najlepsze warunki współpracy w regionie!'
				/>
				<meta property='og:title' content='Rekrutacja kierowców | Flame Partner' />
				<meta property='og:description' content='Szukasz pracy jako kierowca aplikacji? Sprawdź nasze oferty!' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/rekrutacja-kierowcow' />
				<link rel='canonical' href='https://flamepartner.pl/rekrutacja-kierowcow' />
			</Helmet>
			<main className={styles.recruitment}>
				<div className={styles.recruitment__container}>
					<div className={styles.recruitment__wrapper}>
						<div className={styles['recruitment__hero-image']}>
							<h1 className={styles['recruitment__hero-image-title']}>
								Rekrutacja <br /> kierowców
							</h1>
						</div>
						<RecruitmentBenefits />
						<RecruitmentBanner />
						<RecruitmentForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default Recruitment;
