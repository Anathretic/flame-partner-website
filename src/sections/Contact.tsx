import { Link } from 'react-router-dom';
import { ContactForm } from '../components/Forms/ContactForm';
import { FaTaxi } from 'react-icons/fa';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Contact: React.FC = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<p className='contact__title-subtext'>
						Gotowy by wyruszyć w drogę? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className='contact__title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link
							to='/polityka-prywatnosci'
							onClick={() => {
								scrollToTop({ scrollBehaviour: 'auto' });
							}}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='contact__title-info-box'>
						<li>
							<p>E-mail:</p>
							<p>biuro.flamepartner@gmail.com</p>
						</li>
						<li>
							<p>Telefon:</p>
							<p>+48 730 940 691</p>
							<p>+48 730 940 696</p>
						</li>
						<li>
							<p>Biuro:</p>
							<p>ul. Peowiaków 90B</p>
							<p>22-400 Zamość</p>
						</li>
						<li>
							<p>NIP:</p>
							<p>525-302-61-91</p>
						</li>
					</ul>
					<FaTaxi className='contact__title-icon contact__title-icon--first' fontSize={70} />
					<FaTaxi className='contact__title-icon contact__title-icon--second' fontSize={66} />
					<FaTaxi className='contact__title-icon contact__title-icon--third' fontSize={54} />
				</div>
				<ContactForm />
			</div>
			<div className='contact__special-block contact__special-block--left' />
			<div className='contact__special-block contact__special-block--right' />
		</section>
	);
};

export default Contact;
