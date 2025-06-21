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
					<p>
						Szukasz niezawodnego auta w atrakcyjnej cenie? Oferujemy <span>konkurencyjne warunki wynajmu</span> – bez
						ukrytych opłat, z szerokim wyborem pojazdów. Niezależnie od tego, czy potrzebujesz zgrabnego sedana,
						pojemnego kombi, czy zwinnego hothatcha – <span>mamy rozwiązanie dopasowane do Twoich potrzeb!</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Nowe samochody</h3>
					<p>
						Podróżuj komfortowo i bezpiecznie dzięki naszej flocie{' '}
						<span>nowoczesnych, regularnie serwisowanych pojazdów. </span>
						Stawiamy na jakość i oferujemy wyłącznie <span>nowe lub maksymalnie kilkuletnie auta</span>, wyposażone w
						najnowsze technologie i udogodnienia, dzięki czemu praca będzie formalnością.
					</p>
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
