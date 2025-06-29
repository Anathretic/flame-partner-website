import { memo } from 'react';
import { FaCar, FaSearchDollar } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

const RentCarBenefits: React.FC = () => {
	return (
		<section className={styles['rent-car__benefits']} id='informacje'>
			<h2 className={styles['rent-car__title']}>Twoje korzyści</h2>
			<div className={styles['rent-car__benefits-text-content']}>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaSearchDollar fontSize={56} color='#24485c' />
					<h3>Konkurencyjne warunki</h3>
					<ul>
						<li>
							Warunki wynajmu <span>bez ukrytych opłat</span>
						</li>
						<li>
							<span>Szeroki wybór pojazdów</span> dostosowanych do potrzeb
						</li>
						<li>
							Modele od <span>sedana</span> po <span>hothatcha i kombi</span>
						</li>
						<li>
							<span>Oferta dopasowana do każdego kierowcy</span>
						</li>
					</ul>
				</div>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Nowe samochody</h3>
					<ul>
						<li>
							<span>Nowoczesna, serwisowana flota</span>
						</li>
						<li>
							Praca w komfortowych i <span>bezpiecznych warunkach</span>
						</li>
						<li>
							Kilkuletnie auta, <span>w pełni wyposażone</span>
						</li>
						<li>
							<span>Wysoki standard</span>
						</li>
					</ul>
				</div>
			</div>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--left']}`}
			/>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--right']}`}
			/>
		</section>
	);
};

export default memo(RentCarBenefits);
