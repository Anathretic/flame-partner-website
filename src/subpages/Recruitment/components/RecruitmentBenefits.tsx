import { memo } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { GiCoinsPile } from 'react-icons/gi';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import { TbPackages } from 'react-icons/tb';

import styles from '../styles/styles.module.scss';

const RecruitmentBenefits: React.FC = () => {
	return (
		<section className={styles.recruitment__benefits} id='informacje'>
			<h2 className={styles.recruitment__title}>Dlaczego my?</h2>
			<div className={styles['recruitment__benefits-text-content']}>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<HiMiniCurrencyDollar fontSize={56} color='#24485c' />
					<h3>Konkurencyjne zarobki</h3>
					<ul>
						<li>
							Średnie zarobki naszych kierowców <span>osiągają 3250 zł tygodniowo</span>
						</li>
						<li>
							<span>Najlepsi kierowcy</span> zarabiają nawet 9000 zł miesięcznie
						</li>
						<li>
							<span>Możliwość maksymalizacji dochodów</span> dzięki elastycznemu grafikowi
						</li>
						<li>
							<span>Wsparcie</span>, które pomaga zwiększać przychody
						</li>
					</ul>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<FaCalendarAlt fontSize={56} color='#24485c' />
					<h3>Elastyczny grafik</h3>
					<ul>
						<li>
							Sam ustalasz swój grafik pracy - <span>to Ty jesteś szefem</span>
						</li>
						<li>
							<span>Pełna kontrola</span> nad ilością przepracowanych godzin
						</li>
						<li>
							<span>Możliwość dostosowania pracy</span> do własnych potrzeb
						</li>
						<li>
							<span>Elastyczność</span> sprzyjająca maksymalizacji zarobków
						</li>
					</ul>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<GiCoinsPile fontSize={56} color='#24485c' />
					<h3>Przejrzysty system rozliczeń</h3>
					<ul>
						<li>
							Usługa rozliczeniowa to <span>tylko kilka złotych!</span>
						</li>
						<li>
							<span>Brak ukrytych opłat i haczyków</span>
						</li>
						<li>
							<span>Transparentne i jasne</span> warunki rozliczeń
						</li>
						<li>
							<span>Oszczędzasz na kosztach księgowości</span>
						</li>
					</ul>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Pakiet benefitów</h3>
					<ul>
						<li>
							<span>Stawki gwarantowane</span> dla kierowców
						</li>
						<li>
							<span>System bonusów</span> za aktywność i wyniki
						</li>
						<li>
							<span>Pieniądze za polecanie</span> nowych kierowców
						</li>
						<li>
							Dodatkowe <span>nagrody</span> za ciężką pracę
						</li>
					</ul>
				</div>
			</div>
			<div
				className={`${styles['recruitment__benefits-special-block']} ${styles['recruitment__benefits-special-block--left']}`}
			/>
			<div
				className={`${styles['recruitment__benefits-special-block']} ${styles['recruitment__benefits-special-block--right']}`}
			/>
		</section>
	);
};

export default memo(RecruitmentBenefits);
