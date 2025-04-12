import { Link } from 'react-router-dom';
import { WorkForm } from '../../../components/Forms/WorkForm';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { FaTaxi } from 'react-icons/fa';

const RecruitmentForm: React.FC = () => {
	return (
		<section className='work-offer__form'>
			<div className='work-offer__form-container'>
				<div className='work-offer__form-title-box'>
					<h2 className='work-offer__form-title'>Zaczynamy?</h2>
					<p className='work-offer__form-title-subtext'>
						Gotowy by wyruszyć w drogę? Świetnie! Przed Tobą otwiera się szansa na rozpoczęcie nowego etapu w swoim
						życiu, który pozwoli Ci zarządzać czasem i łączyć przyjemne z pożytecznym.
					</p>
					<p className='work-offer__form-title-subtext'>
						Jeśli chcesz również wynająć u nas samochód to najpierw wypełnij formularz zgłoszeniowy, a potem{' '}
						<Link to='/wynajem' onClick={scrollToTop}>
							kliknij tutaj
						</Link>
						.
					</p>
					<p className='work-offer__form-title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='work-offer__form-title-info-box'>
						<li>
							<p>Obszar działania:</p>
							<p className='work-offer__form-special-text'>
								Województwo lubelskie w miastach takich jak <span>Zamość, Lublin, Biłgoraj i Chełm.</span> Pamiętaj, że
								ciągle się rozwijamy i już niedługo <span>kolejne miasta staną przed Tobą otworem!</span>
							</p>
						</li>
						<li>
							<p>Komfortowe stawki rozliczeń:</p>
							<p>
								- do 150 kursów - <span>50zł</span>
							</p>
							<p>
								- powyżej 150 kurstów - <span>25zł</span>
							</p>
						</li>
						<li>
							<p>Wysokie bonusy:</p>
							<p>
								- polecenie pracownika - <span>200zł</span>
							</p>
							<p>
								- zwrot za badania - <span>400zł</span>
							</p>
						</li>
					</ul>
					<FaTaxi className='work-offer__form-title-icon work-offer__form-title-icon--first' fontSize={70} />
					<FaTaxi className='work-offer__form-title-icon work-offer__form-title-icon--second' fontSize={66} />
					<FaTaxi className='work-offer__form-title-icon work-offer__form-title-icon--third' fontSize={54} />
				</div>
				<WorkForm />
			</div>
			<div className='work-offer__form-special-block work-offer__form-special-block--left' />
			<div className='work-offer__form-special-block work-offer__form-special-block--right' />
		</section>
	);
};

export default RecruitmentForm;
