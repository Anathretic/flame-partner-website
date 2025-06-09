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
						Jeśli chcesz również wynająć u nas samochód i zacząć pracę, to wypełnij pełny formularz dostępny pod -{' '}
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
							<p>
								<FaTaxi />
								Obszar działania:
							</p>
							<p className={styles['recruitment__form-special-text']}>
								Województwo lubelskie w miastach takich jak <span>Zamość, Lublin, Biłgoraj i Chełm.</span> Ciągle się
								rozwijamy i dodaliśmy do oferty <span>Radom</span> oraz <span> Kielce!</span>
							</p>
						</li>
						<li>
							<p>
								<FaTaxi /> Komfortowe stawki rozliczeń:
							</p>
							<p>
								- stała, jasna kwota - <span>30zł</span>
							</p>
						</li>
						<li>
							<p>
								<FaTaxi />
								Wysokie bonusy:
							</p>
							<p>
								- kierowca miesiąca - <span>+200zł</span>
							</p>
							<p>
								- polecenie pracownika - <span>200zł</span>
							</p>
							<p>
								- zwrot za badania - <span>200zł</span>
							</p>
						</li>
					</ul>
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
