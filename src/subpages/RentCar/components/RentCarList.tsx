import { memo } from 'react';
import { carListData } from '../carListData/carListData';
import { RentCarCarousel } from '../../../components/RentCar/RentCarCarousel/RentCarCarousel';

import styles from '../styles/styles.module.scss';

const RentCarList: React.FC = () => {
	const RentCarCarouselMemoized = memo(RentCarCarousel);

	return (
		<section className={styles['rent-car__list']}>
			<div className={styles['rent-car__list-container']}>
				<div className={styles['rent-car__list-wrapper']}>
					<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>Dostępne samochody</h2>
					<RentCarCarouselMemoized slides={carListData} />
				</div>
			</div>
			<div className={`${styles['rent-car__list-special-block']} ${styles['rent-car__list-special-block--left']}`} />
			<div className={`${styles['rent-car__list-special-block']} ${styles['rent-car__list-special-block--right']}`} />
		</section>
	);
};

export default memo(RentCarList);
