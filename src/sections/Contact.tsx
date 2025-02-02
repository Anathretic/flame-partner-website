import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactForm } from '../components/Forms/ContactForm';
import { useSubmitFormButton } from '../hooks/useSubmitFormButton';
import { FaTaxi } from 'react-icons/fa';

const initialSubmitButtonState = 'Wyślij';

const Contact: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState });
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<p className='contact__title-subtext'>
						Gotowy by wyruszyć w drogę? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
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
							<p>NIP:</p>
							<p>525-302-61-91</p>
						</li>
					</ul>
					<FaTaxi className='contact__title-icon contact__title-icon--first' fontSize={70} />
					<FaTaxi className='contact__title-icon contact__title-icon--second' fontSize={66} />
					<FaTaxi className='contact__title-icon contact__title-icon--third' fontSize={54} />
				</div>
				<ContactForm
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					errorValue={errorValue}
					setErrorValue={setErrorValue}
					buttonText={buttonText}
					setButtonText={setButtonText}
					isMobile={isMobile}
					refCaptcha={refCaptcha}
				/>
			</div>
			<div className='contact__special-block contact__special-block--left' />
			<div className='contact__special-block contact__special-block--right' />
		</section>
	);
};

export default Contact;
