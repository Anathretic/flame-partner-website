import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

const PrivacyPolicy: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Polityka prywatności | Flame Partner</title>
				<meta
					name='description'
					content='Dowiedz się, jak przetwarzamy Twoje dane osobowe i jak dbamy o ich bezpieczeństwo.'
				/>
				<meta property='og:title' content='Polityka prywatności | Flame Partner' />
				<meta property='og:description' content='Zapoznaj się z naszymi zasadami prywatności i przetwarzania danych.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/polityka-prywatnosci' />
				<link rel='canonical' href='https://flamepartner.pl/polityka-prywatnosci' />
			</Helmet>
			<main className={styles['privacy-policy']}>
				<section className={styles['privacy-policy__container']}>
					<h1 className={styles['privacy-policy__title']}>Polityka Prywatności</h1>
					<div className={styles['privacy-policy__box']}>
						<h2>1. Informacje ogólne</h2>
						<p>
							Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez
							Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez Flame Partner z siedzibą w
							Warszawie, Aleja "Solidarności" 117-315, 00-140 Warszawa, NIP: 5253026191, REGON: 540352583.
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>2. Administrator Danych Osobowych</h2>
						<p>
							Administratorem danych osobowych Użytkowników jest Flame Partner. Kontakt z administratorem jest możliwy
							pod adresem e-mail: <span>biuro.flamepartner@gmail.com</span>
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>3. Zakres i cel zbierania danych</h2>
						<p>Dane osobowe Użytkowników są zbierane w następujących celach:</p>
						<ul>
							<li>Realizacja usług transportu pasażerskiego.</li>
							<li>Utrzymanie kontaktu z klientami.</li>
							<li>Przetwarzanie płatności i rozliczeń.</li>
							<li>Spełnienie obowiązków prawnych ciążących na Administratorze.</li>
							<li>
								Obsługa formularza kontaktowego – Użytkownik podaje imię i adres e-mail w celu nawiązania kontaktu.
							</li>
							<li>
								Obsługa formularza zgłoszeniowego – Użytkownik podaje imię, nazwisko, numer telefonu oraz adres e-mail w
								celu rekrutacji lub zgłoszenia współpracy.
							</li>
							<li>Ochrona przed spamem i nadużyciami poprzez wykorzystanie Google reCAPTCHA v2.</li>
						</ul>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>4. Podstawa prawna przetwarzania danych</h2>
						<p>Dane osobowe są przetwarzane na podstawie:</p>
						<ul>
							<li>
								Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy lub podjęcia działań na żądanie Użytkownika
								przed zawarciem umowy.
							</li>
							<li>Art. 6 ust. 1 lit. c RODO – wypełnienie obowiązku prawnego ciążącego na Administratorze.</li>
							<li>
								Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora, np. marketing bezpośredni
								własnych produktów lub usług oraz zabezpieczenie formularzy przed spamem i nadużyciami przy pomocy
								Google reCAPTCHA.
							</li>
						</ul>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>5. Odbiorcy danych</h2>
						<p>Dane osobowe Użytkowników mogą być przekazywane:</p>
						<ul>
							<li>Podmiotom przetwarzającym je na zlecenie Administratora, np. dostawcom usług IT.</li>
							<li>Organom uprawnionym do ich otrzymania na podstawie przepisów prawa.</li>
							<li>Google LLC (w zakresie ochrony formularzy przez Google reCAPTCHA v2).</li>
						</ul>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>6. Prawa Użytkowników</h2>
						<p>Użytkownikom przysługują następujące prawa:</p>
						<ul>
							<li>Prawo dostępu do treści swoich danych.</li>
							<li>Prawo do sprostowania danych.</li>
							<li>Prawo do usunięcia danych.</li>
							<li>Prawo do ograniczenia przetwarzania danych.</li>
							<li>Prawo do przenoszenia danych.</li>
							<li>Prawo wniesienia sprzeciwu wobec przetwarzania danych.</li>
							<li>Prawo wniesienia skargi do organu nadzorczego.</li>
						</ul>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>7. Pliki cookies i technologie śledzące</h2>
						<p>Strona internetowa Administratora korzysta z plików cookies w celu:</p>
						<ul className={styles['privacy-policy__cookie-box-ul']}>
							<li>Dostosowania zawartości strony do preferencji Użytkownika.</li>
							<li>Tworzenia statystyk umożliwiających ulepszanie struktury i zawartości strony.</li>
						</ul>
						<p>
							Ponadto strona wykorzystuje Google reCAPTCHA v2 w celu ochrony formularzy przed spamem i automatycznymi
							zgłoszeniami. Korzystanie z reCAPTCHA podlega Polityce Prywatności i Warunkom Usługi Google.
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>8. Zmiany w Polityce Prywatności</h2>
						<p>
							Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Aktualna wersja Polityki
							będzie dostępna na stronie internetowej Administratora.
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>9. Kontakt</h2>
						<p>
							W przypadku pytań dotyczących Polityki Prywatności prosimy o kontakt pod adresem e-mail:
							<span>biuro.flamepartner@gmail.com</span>
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<h2>10. Informacja o dobrowolności lub obowiązku podania danych</h2>
						<p>
							Podanie danych osobowych jest dobrowolne, ale niezbędne do świadczenia usług lub zawarcia, czy realizacji
							umowy, lub podejmowania działań przed zleceniem świadczenia usług lub zawarciem umowy. W przypadku
							niepodania danych, świadczenie usług, zawarcie i realizacja umowy lub podejmowanie działań przed
							świadczeniem usług lub zawarciem umowy może być niemożliwe lub utrudnione.
						</p>
					</div>
					<div className={styles['privacy-policy__box']}>
						<p>Wsparcie merytoryczne, kodowanie oraz wykonanie:</p>
						<a href='https://www.linkedin.com/in/konrad-wojtylo' target='_blank' rel='noreferrer'>
							Konrad Wojtyło
						</a>
					</div>
					<Link
						to='/'
						className={styles['privacy-policy__btn']}
						onClick={scrollToTop}
						aria-label='Powrót na stronę główną'>
						Powrót
					</Link>
				</section>
				<div
					className={`${styles['privacy-policy__special-block']} ${styles['privacy-policy__special-block--left']}`}
				/>
				<div
					className={`${styles['privacy-policy__special-block']} ${styles['privacy-policy__special-block--right']}`}
				/>
			</main>
		</>
	);
};

export default PrivacyPolicy;
