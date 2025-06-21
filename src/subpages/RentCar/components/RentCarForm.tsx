import { Link } from 'react-router-dom';
import { CarForm } from '../../../components/Forms/CarForm';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { RentCarFormRefModel } from '../../../models/rentCar.model';
import { FaTaxi } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

const RentCarForm: React.FC<RentCarFormRefModel> = ({ formRef }) => {
	return (
		<section className={styles['rent-car__form']} id='formularz'>
			<div className={styles['rent-car__form-container']}>
				<div className={styles['rent-car__form-title-box']}>
					<h2 className={styles['rent-car__form-title']}>Zaczynamy?</h2>
					<p id='formularz' className={styles['rent-car__form-title-subtext']}>
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
							<p>
								<FaTaxi /> Obszar działania:
							</p>
							<p className={styles['rent-car__form-special-text']}>
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
								<FaTaxi /> Wysokie bonusy:
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
				<CarForm formRef={formRef} />
			</div>
			<div className={`${styles['rent-car__form-special-block']} ${styles['rent-car__form-special-block--left']}`} />
			<div className={`${styles['rent-car__form-special-block']} ${styles['rent-car__form-special-block--right']}`} />
		</section>
	);
};

export default RentCarForm;
