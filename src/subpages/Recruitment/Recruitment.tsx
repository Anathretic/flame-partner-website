import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';
import { useNavbarItemsContext } from '../../hooks/contextHooks/useNavbarItemsContext';
import { useFooterLinksContext } from '../../hooks/contextHooks/useFooterLinksContext';
import { useCarSelectContext } from '../../hooks/contextHooks/useCarSelectContext';
import { recruitmentNavbarItems } from '../../components/Navbar/components/navbarData/navbarItems';
import { RecruitmentBenefits, RecruitmentForm, RecruitmentBanner } from './components';
import { SubpageWithNavbarModel } from '../../models/subpage.model';

import styles from './styles/styles.module.scss';

const Recruitment: React.FC<SubpageWithNavbarModel> = ({ setSubpageIsLoading, subpageIsLoading }) => {
	const [desktopBtnValue, setDesktopBtnValue] = useState('Zadzwoń');

	const { setNavbarItems } = useNavbarItemsContext();
	const { setShowSpecialLinks } = useFooterLinksContext();
	const { setSelectedCar } = useCarSelectContext();

	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

	const handleDesktopBtn = () => {
		setDesktopBtnValue('+48 730 940 691');
	};

	useEffect(() => {
		setSubpageIsLoading(false);
	}, [subpageIsLoading]);

	useEffect(() => {
		setNavbarItems(recruitmentNavbarItems);
	}, []);

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	useEffect(() => {
		setSelectedCar('');
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
							<h1 className={styles['recruitment__hero-image-title']}>Rekrutacja kierowców</h1>
							{!isDesktop ? (
								<a href='tel:+48730940691' className={styles['recruitment__hero-image-btn']}>
									Zadzwoń
								</a>
							) : (
								<button
									type='button'
									className={`${styles['recruitment__hero-image-btn']} ${
										desktopBtnValue !== 'Zadzwoń' && styles['recruitment__hero-image-btn--after-click']
									}`}
									onClick={handleDesktopBtn}>
									{desktopBtnValue}
								</button>
							)}
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
