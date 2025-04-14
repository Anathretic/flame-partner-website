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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta id voluptas qui minus iure suscipit.
						Ullam vitae consequuntur deleniti ut rerum quam amet ab.
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
							<p>Lorem, ipsum:</p>
							<p className={styles['rent-car__form-special-text']}>
								Lorem ipsum dolor sit amet. <span>Lorem ipsum dolor sit.</span> Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Natus, quos.
							</p>
						</li>
						<li>
							<p>Lorem, ipsum:</p>
							<p>- Lorem ipsum dolor sit.</p>
							<p>- Lorem ipsum dolor sit.</p>
						</li>
						<li>
							<p>Lorem, ipsum::</p>
							<p>- Lorem ipsum dolor sit.</p>
							<p>- Lorem ipsum dolor sit.</p>
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
