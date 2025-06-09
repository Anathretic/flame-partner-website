import { Link } from 'react-router-dom';
import { ContactForm } from '../../components/Forms/ContactForm';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaRegBuilding } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

const Contact: React.FC = () => {
	return (
		<section className={styles.contact} id='kontakt'>
			<div className={styles.contact__container}>
				<div className={styles['contact__title-box']}>
					<h2 className={styles.contact__title}>Kontakt</h2>
					<p className={styles['contact__title-subtext']}>
						Gotowy by wyruszyć w drogę? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className={styles['contact__title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['contact__title-info-box']}>
						<li>
							<div>
								<FiMail />
							</div>
							<div>
								<p>E-mail:</p>
								<p>biuro.flamepartner@gmail.com</p>
							</div>
						</li>
						<li>
							<div>
								<FiPhone />
							</div>
							<div>
								<p>Telefon:</p>
								<p>+48 730 940 691</p>
								<p>+48 730 940 696</p>
							</div>
						</li>
						<li>
							<div>
								<FaRegBuilding />
							</div>
							<div>
								<p>Biuro:</p>
								<p>ul. Peowiaków 90B (II piętro)</p>
								<p>22-400 Zamość</p>
							</div>
						</li>
						<li>
							<div>
								<FaBriefcase />
							</div>
							<div>
								<p>NIP:</p>
								<p>525-302-61-91</p>
							</div>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
			<div className={`${styles['contact__special-block']} ${styles['contact__special-block--left']}`} />
			<div className={`${styles['contact__special-block']} ${styles['contact__special-block--right']}`} />
		</section>
	);
};

export default Contact;
