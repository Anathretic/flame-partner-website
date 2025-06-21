import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavbarItemsContext } from '../../hooks/contextHooks/useNavbarItemsContext';
import { useFooterLinksContext } from '../../hooks/contextHooks/useFooterLinksContext';
import { rentCarNavbarItems } from '../../components/Navbar/components/navbarData/navbarItems';
import { RentCarBenefits, RentCarForm, RentCarList } from './components';
import { SubpageWithNavbarModel } from '../../models/subpage.model';

import styles from './styles/styles.module.scss';

const RentCar: React.FC<SubpageWithNavbarModel> = ({ setSubpageIsLoading, subpageIsLoading }) => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const { setNavbarItems } = useNavbarItemsContext();
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setSubpageIsLoading(false);
	}, [subpageIsLoading]);

	useEffect(() => {
		setNavbarItems(rentCarNavbarItems);
	}, []);

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
							<h1 className={styles['rent-car__hero-image-title']}>Wynajem samochodu</h1>
						</div>
						<RentCarBenefits />
						<RentCarList formRef={formRef} />
						<RentCarForm formRef={formRef} />
					</div>
				</div>
			</main>
		</>
	);
};

export default RentCar;
