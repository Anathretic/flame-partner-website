import { Link } from 'react-router-dom';
import { CarForm } from '../../../components/Forms/CarForm';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { FaTaxi } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

const RentCarForm: React.FC = () => {
	return (
		<section className={styles['rent-car__form']}>
			<div className={styles['rent-car__form-container']}>
				<div className={styles['rent-car__form-title-box']}>
					<h2 className={styles['rent-car__form-title']}>Zaczynamy?</h2>
					<p className={styles['rent-car__form-title-subtext']}>
						Gotowy by wyruszyć w drogę naszym autem? Świetnie! Przed Tobą otwiera się szansa na rozpoczęcie nowego etapu
						w życiu, przez który poprowadzą Cię nasze cztery koła.
					</p>
					<p className={styles['rent-car__form-title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['rent-car__form-title-info-box']}>
						<li>
							<p>Obszar działania:</p>
							<p className={styles['rent-car__form-special-text']}>
								Województwo lubelskie w miastach takich jak <span>Zamość, Lublin, Biłgoraj i Chełm.</span> Pamiętaj, że
								ciągle się rozwijamy i już niedługo <span>kolejne miasta staną przed Tobą otworem!</span>
							</p>
						</li>
						<li>
							<p>Komfortowe stawki rozliczeń:</p>
							<p>
								- do 150 kursów - <span>50zł</span>
							</p>
							<p>
								- powyżej 150 kurstów - <span>25zł</span>
							</p>
						</li>
						<li>
							<p>Wysokie bonusy:</p>
							<p>
								- polecenie pracownika - <span>200zł</span>
							</p>
							<p>
								- zwrot za badania - <span>400zł</span>
							</p>
						</li>
					</ul>
					<FaTaxi
						className={`${styles['rent-car__form-title-icon']} ${styles['rent-car__form-title-icon--first']}`}
						fontSize={70}
					/>
					<FaTaxi
						className={`${styles['rent-car__form-title-icon']} ${styles['rent-car__form-title-icon--second']}`}
						fontSize={66}
					/>
					<FaTaxi
						className={`${styles['rent-car__form-title-icon']} ${styles['rent-car__form-title-icon--third']}`}
						fontSize={54}
					/>
				</div>
				<CarForm />
			</div>
			<div className={`${styles['rent-car__form-special-block']} ${styles['rent-car__form-special-block--left']}`} />
			<div className={`${styles['rent-car__form-special-block']} ${styles['rent-car__form-special-block--right']}`} />
		</section>
	);
};

export default RentCarForm;
