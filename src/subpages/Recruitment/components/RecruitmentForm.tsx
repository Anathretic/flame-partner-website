import { Link } from 'react-router-dom';
import { WorkForm } from '../../../components/Forms/WorkForm';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { FaTaxi } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

const RecruitmentForm: React.FC = () => {
	return (
		<section className={styles.recruitment__form}>
			<div className={styles['recruitment__form-container']}>
				<div className={styles['recruitment__form-title-box']}>
					<h2 className={styles['recruitment__form-title']}>Zaczynamy?</h2>
					<p className={styles['recruitment__form-title-subtext']}>
						Gotowy by wyruszyć w drogę? Świetnie! Przed Tobą otwiera się szansa na rozpoczęcie nowego etapu w swoim
						życiu, który pozwoli Ci zarządzać czasem i łączyć przyjemne z pożytecznym.
					</p>
					<p className={styles['recruitment__form-title-subtext']}>
						Jeśli chcesz również wynająć u nas samochód to najpierw wypełnij formularz zgłoszeniowy, a potem{' '}
						<Link to='/wynajem-samochodu' onClick={scrollToTop}>
							kliknij tutaj
						</Link>
						.
					</p>
					<p className={styles['recruitment__form-title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['recruitment__form-title-info-box']}>
						<li>
							<p>Obszar działania:</p>
							<p className={styles['recruitment__form-special-text']}>
								Województwo lubelskie w miastach takich jak <span>Zamość, Lublin, Biłgoraj i Chełm.</span> Pamiętaj, że
								ciągle się rozwijamy i już niedługo <span>kolejne miasta staną przed Tobą otworem!</span>
							</p>
						</li>
						<li>
							<p>Komfortowe stawki rozliczeń:</p>
							<p>
								- stała, jasna kwota - <span>50zł</span>
							</p>
						</li>
						<li>
							<p>Wysokie bonusy:</p>
							<p>
								- polecenie pracownika - <span>200zł</span>
							</p>
							<p>
								- zwrot za badania - <span>200zł</span>
							</p>
						</li>
					</ul>
					<FaTaxi
						className={`${styles['recruitment__form-title-icon']} ${styles['recruitment__form-title-icon--first']}`}
						fontSize={70}
					/>
					<FaTaxi
						className={`${styles['recruitment__form-title-icon']} ${styles['recruitment__form-title-icon--second']}`}
						fontSize={66}
					/>
					<FaTaxi
						className={`${styles['recruitment__form-title-icon']} ${styles['recruitment__form-title-icon--third']}`}
						fontSize={54}
					/>
				</div>
				<WorkForm />
			</div>
			<div
				className={`${styles['recruitment__form-special-block']} ${styles['recruitment__form-special-block--left']}`}
			/>
			<div
				className={`${styles['recruitment__form-special-block']} ${styles['recruitment__form-special-block--right']}`}
			/>
		</section>
	);
};

export default RecruitmentForm;
