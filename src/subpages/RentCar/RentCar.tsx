import { useEffect } from 'react';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { RentCarBenefits, RentCarForm, RentCarList } from './components';

import styles from './styles/styles.module.scss';

const RentCar: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
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
	);
};

export default RentCar;
