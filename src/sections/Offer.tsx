import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';
import { FaCar, FaPhoneAlt } from 'react-icons/fa';
import { HiDocumentCheck } from 'react-icons/hi2';
import { GiTeacher } from 'react-icons/gi';

import PhoneImage from '../images/offer-section/offer-section-phone-image.png';

const Offer: React.FC = () => {
	return (
		<section id='oferta' className='offer'>
			<div className='offer__container'>
				<div className='offer__wrapper'>
					<h2 className='offer__title'>Oferta</h2>
					<div className='offer__content-wrapper'>
						<div className='offer__text-content'>
							<div className='offer__content-box'>
								<GiTeacher fontSize={56} color='#19323f' />
								<h3>Profesjonalny onboarding</h3>
								<p>
									Nie wiesz jak zacząć? Spokojnie! Jeśli nigdy nie korzystałeś z aplikacji Bolt/Uber/FreeNow
									przeprowadzimy Cię przez cały proces rejestracji i będziesz mógł od razu zacząć jeździć i zarabiać!
								</p>
							</div>
							<div className='offer__content-box'>
								<HiDocumentCheck fontSize={56} color='#19323f' />
								<h3>Prostota rozliczeń</h3>
								<p>
									Znajomość prawa, jak i wielu systemów rozliczeniowych pozwala nam prowadzić księgowość w sposób prosty
									i efektywny. Niczym się nie martw, mamy w tym doświadczenie.
								</p>
							</div>
							<div className='offer__content-box'>
								<FaCar fontSize={56} color='#19323f' />
								<h3>Wynajem samochodów</h3>
								<p>
									Nie posiadasz własnego samochodu? To nie będzie żadną przeszkodą, gdyż oferujemy wynajem na
									konkurencyjnych warunkach, a w naszej flocie znajdziesz m.in. Toyotę Corollę, czy Skodę Octavię.
								</p>
							</div>
						</div>
						<div className='offer__image-content'>
							<div className='offer__image-content-box'>
								<div className='offer__image-box'>
									<img src={PhoneImage} alt='Obraz przedstawiający telefon' />
									<Link to='/praca-w-uber' onClick={scrollToTop}>
										Sprawdź
									</Link>
									<FaPhoneAlt fontSize={56} className='offer__image-box-icon' />
									<p>Twoja Oferta</p>
								</div>
								<div className='offer__special-circle' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='offer__special-block offer__special-block--left' />
			<div className='offer__special-block offer__special-block--right' />
		</section>
	);
};

export default Offer;
