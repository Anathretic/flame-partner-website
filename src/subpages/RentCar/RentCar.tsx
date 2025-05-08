import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { RentCarBenefits, RentCarForm, RentCarList } from './components';

import styles from './styles/styles.module.scss';

const RentCar: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Wynajem samochodu | Flame Partner</title>
				<meta
					name='description'
					content='Szybki i bezproblemowy wynajem samochodu w Lublinie i Zamościu. Atrakcyjne warunki, minimum formalności!'
				/>
				<meta property='og:title' content='Wynajem samochodu | Flame Partner' />
				<meta property='og:description' content='Wynajmij auto w kilka minut. Nasza flota jest gotowa!' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/wynajem-samochodu' />
				<link rel='canonical' href='https://flamepartner.pl/wynajem-samochodu' />
			</Helmet>
			<main className={styles['rent-car']}>
				<div className={styles['rent-car__container']}>
					<div className={styles['rent-car__wrapper']}>
						<div className={styles['rent-car__hero-image']}>
							<h1 className={styles['rent-car__hero-image-title']}>
								Wynajem <br /> samochodu
							</h1>
						</div>
						<RentCarBenefits />
						<RentCarList />
						<RentCarForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default RentCar;
