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
								<h3>Wdrożenie</h3>
								<ul>
									<li>
										<span>Prosta rejestracja</span> w aplikacjach Bolt, Uber i FreeNow
									</li>
									<li>
										Szybkie i przejrzyste formalności, <span>bez kruczków!</span>
									</li>
									<li>
										<span>Instrukcje</span>, jak zacząć zarabiać jako kierowca
									</li>
									<li>
										Elastyczny start, <span> pracuj natychmiast!</span>
									</li>
								</ul>
							</div>
							<div className={styles['offer__text-content-box']}>
								<HiDocumentCheck fontSize={56} color='#24485c' />
								<h3>Księgowość</h3>
								<ul>
									<li>
										<span>Systemy rozliczeniowe</span> dla kierowców Bolt, Uber i FreeNow
									</li>
									<li>
										Prosta i przejrzysta księgowość <span>bez zbędnych formalności</span>
									</li>
									<li>
										<span>Doświadczenie i znajomość prawa</span>, które Cię odciążą
									</li>
									<li>
										<span>Wsparcie na każdym etapie</span> rozliczeń i podatków.
									</li>
								</ul>
							</div>
							<div className={styles['offer__text-content-box']}>
								<FaCar fontSize={56} color='#24485c' />
								<h3>Wynajem</h3>
								<ul>
									<li>
										Oferujemy <span>samochody w przystępnych cenach.</span>
									</li>
									<li>
										<span>Elastyczne warunki</span> dopasowane do Twoich potrzeb
									</li>
									<li>
										<span>Sprawne auta gotowe do pracy</span> w Bolt, Uber i FreeNow
									</li>
								</ul>
								<div className={styles['offer__button-box']}>
									<Link
										to='/wynajem-samochodu'
										onClick={scrollToTop}
										aria-label='Przycisk przenoszący na stronę wynajmu samochodów'>
										Zobacz
									</Link>
								</div>
							</div>
						</div>
						<div className={styles['offer__image-content']}>
							<div className={styles['offer__image-content-box']}>
								<div className={`${styles['offer__image-container']} ${animations['phone-animation']}`}>
									<img src={PhoneImage} alt='Obraz przedstawiający telefon' />
									<FaPhoneAlt fontSize={56} className={styles['offer__image-container-icon']} />
									<p>Twoja Oferta</p>
									<Link
										to='/rekrutacja-kierowcow'
										onClick={scrollToTop}
										aria-label='Przycisk przenoszący na stronę rekrutacji'>
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
