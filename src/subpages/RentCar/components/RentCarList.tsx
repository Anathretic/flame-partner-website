import { memo } from 'react';

import styles from '../styles/styles.module.scss';

const RentCarList: React.FC = () => {
	return (
		<section className={styles['rent-car__list']}>
			<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>
				Lista dostępnych samochodów
			</h2>
			<div className={styles['rent-car__list-container']}></div>
			<div className={`${styles['rent-car__list-special-block']} ${styles['rent-car__list-special-block--left']}`} />
			<div className={`${styles['rent-car__list-special-block']} ${styles['rent-car__list-special-block--right']}`} />
		</section>
	);
};

export default memo(RentCarList);
