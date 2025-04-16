import { memo } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FaCar, FaPhoneAlt } from 'react-icons/fa';
import { HiDocumentCheck } from 'react-icons/hi2';
import { GiTeacher } from 'react-icons/gi';

import PhoneImage from '../../images/offer-section/offer-section-phone-image.png';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

const Offer: React.FC = () => {
	return (
		<section id='oferta' className={styles.offer}>
			<div className={styles.offer__container}>
				<div className={styles.offer__wrapper}>
					<h2 className={styles.offer__title}>Oferta</h2>
					<div className={styles['offer__content-wrapper']}>
						<div className={styles['offer__text-content']}>
							<div className={styles['offer__text-content-box']}>
								<GiTeacher fontSize={56} color='#24485c' />
								<h3>Profesjonalne wdrożenie</h3>
								<p>
									Nie wiesz jak zacząć? Spokojnie! Jeśli nigdy nie korzystałeś z aplikacji Bolt/Uber/FreeNow
									<span> przeprowadzimy Cię przez cały proces rejestracji</span> i będziesz mógł od razu zacząć jeździć
									i zarabiać!
								</p>
							</div>
							<div className={styles['offer__text-content-box']}>
								<HiDocumentCheck fontSize={56} color='#24485c' />
								<h3>Prostota rozliczeń</h3>
								<p>
									Znajomość prawa, jak i wielu systemów rozliczeniowych pozwala nam prowadzić księgowość w{' '}
									<span>sposób prosty i efektywny</span>. Niczym się nie martw, mamy w tym doświadczenie.
								</p>
							</div>
							<div className={styles['offer__text-content-box']}>
								<FaCar fontSize={56} color='#24485c' />
								<h3>Wynajem samochodów</h3>
								<p>
									Nie posiadasz własnego samochodu? To nie będzie żadną przeszkodą, gdyż{' '}
									<span>oferujemy wynajem na konkurencyjnych warunkach!</span>
								</p>
								<Link to='/wynajem-samochodu'>Zobacz</Link>
							</div>
						</div>
						<div className={styles['offer__image-content']}>
							<div className={styles['offer__image-content-box']}>
								<div className={`${styles['offer__image-container']} ${animations['phone-animation']}`}>
									<img src={PhoneImage} alt='Obraz przedstawiający telefon' />
									<FaPhoneAlt fontSize={56} className={styles['offer__image-container-icon']} />
									<p>Twoja Oferta</p>
									<Link to='/rekrutacja' onClick={scrollToTop} aria-label='Przycisk przenoszący na stronę rekrutacji'>
										Sprawdź
									</Link>
								</div>
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--first']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--second']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--third']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--fourth']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--fifth']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--sixth']}`} />
								<div className={`${styles['offer__special-circle']} ${styles['offer__special-circle--seventh']}`} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles['offer__special-block']} ${styles['offer__special-block--left']}`} />
			<div className={`${styles['offer__special-block']} ${styles['offer__special-block--right']}`} />
		</section>
	);
};

export default memo(Offer);
