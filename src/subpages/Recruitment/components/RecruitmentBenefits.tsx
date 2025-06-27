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
					<p>
						Średnie zarobki naszych kierowców osiągają nawet 3250 zł tygodniowo! Nasi najlepsi kierowcy potrafią zarobić{' '}
						<span>nawet 9000 zł miesięcznie.</span>
					</p>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<FaCalendarAlt fontSize={56} color='#24485c' />
					<h3>Elastyczny grafik</h3>
					<p>
						Sam ustalasz sobie grafik, co zapewnia Ci elastyczność i możliwość największego zarobku.{' '}
						<span>Ty kontrolujesz wysokość wynagrodzenia</span> i ilość przepracowanych godzin!
					</p>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<GiCoinsPile fontSize={56} color='#24485c' />
					<h3>Przejrzysty system rozliczeń</h3>
					<p>
						Jeśli udało Ci się osiągnąć bardzo wysoką ilość kursów, to nasza usługa rozliczeniowa będzie Cię kosztować
						<span> zaledwie kilka złotych.</span> U Nas nie ma haczyków!
					</p>
				</div>
				<div className={styles['recruitment__benefits-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Pakiet benefitów</h3>
					<p>
						Ekstra dodatki dla kierowców, wynagradzające ciężką pracę - <span>stawki gwarantowane</span>, system bonusów
						lub pieniądze za polecanie nowych kierowców.
					</p>
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
