import { memo } from 'react';

const ChooseUs: React.FC = () => {
	return (
		<section id='wybierz-nas' className='choose-us'>
			<div className='choose-us__container'>
				<div className='choose-us__wrapper'>
					<h2 className='choose-us__title'>Wybierz nas!</h2>
					<div className='choose-us__box'>
						<div className='choose-us__box-item'>
							<div className='choose-us__box-item-image' />
							<h3>1. Oficjalny partner</h3>
							<p>
								Jesteśmy oficjalnym partnerem popularnych na rynku firm, które umożliwiają pracę przez aplikacje mobilne
								takie jak Uber, Bolt, czy FreeNow. Z nami wszystko będzie jasne, a Ty będziesz mógł się skupić na swojej
								pracy.
							</p>
						</div>
						<div className='choose-us__box-item'>
							<div className='choose-us__box-item-image' />
							<h3>2. Księgowość</h3>
							<p>
								Doskonale znamy naszych klientów, dlatego gwarantujemy pełną obsługę rozliczeniową i księgową, gdzie
								wszystko będzie dla Ciebie jasne, a drobny druczek, czy gwiazdki nie istnieją.
							</p>
						</div>
						<div className='choose-us__box-item'>
							<div className='choose-us__box-item-image' />
							<h3>3. Profesjonalny zespół</h3>
							<p>
								Nasi pracownicy to profesjonaliści, którzy każdego dnia pogłębiają swoją wiedzę oraz badają aktualny
								rynek. Są na bieżąco z każdą nowością serwowaną branży transportu publicznego.
							</p>
						</div>
						<div className='choose-us__box-item'>
							<div className='choose-us__box-item-image' />
							<h3>4. Kilka form zatrudnienia</h3>
							<p>
								B2B? Umowa zlecenie? Możesz być spokojny, gdyż umowa, którą z nami podpiszesz będzie korzystna dla obu
								stron! Zależy nam, byś czerpał przyjemność z pokonywania kolejnych kilometrów.
							</p>
						</div>
						<div className='choose-us__box-item'>
							<div className='choose-us__box-item-image' />
							<h3>5. Obsługa w wielu językach</h3>
							<p>
								Nie bój się napisać! Nasz zespół jest wielojęzyczny i zapewnimy Ci odpowiedni komfort pracy, który
								będzie widoczny już od pierwszej rozmowy.
							</p>
						</div>
					</div>
				</div>
				<div className='choose-us__special-decoration choose-us__special-decoration--first' />
				<div className='choose-us__special-decoration choose-us__special-decoration--second' />
				<div className='choose-us__special-decoration choose-us__special-decoration--third' />
				<div className='choose-us__special-decoration choose-us__special-decoration--fourth' />
				<div className='choose-us__special-decoration choose-us__special-decoration--fifth' />
			</div>
			<div className='choose-us__special-block choose-us__special-block--left' />
			<div className='choose-us__special-block choose-us__special-block--right' />
		</section>
	);
};

export default memo(ChooseUs);
