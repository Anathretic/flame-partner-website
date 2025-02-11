import { WorkForm } from '../../../components/Forms/WorkForm';

const RecruitmentForm: React.FC = () => {
	return (
		<section className='contact'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Zaczynamy?</h2>
					<p className='contact__title-subtext'>
						Gotowy by wyruszyć w drogę? Świetnie! Przed Tobą otwiera się szansa na rozpoczęcie nowego etapu w swoim
						życiu, który pozwoli Ci zarządzać czasem i łączyć przyjemne z pożytecznym.
					</p>
					<ul className='contact__title-info-box'>
						<li>
							<p>Obszar działania:</p>
							<p style={{ lineHeight: '1.6em' }}>
								Województwo lubelskie w miastach takich jak Zamość, Lublin, Biłgoraj i Chełm. Pamiętaj, że ciągle się
								rozwijamy i już niedługo kolejne miasta staną przed Tobą otworem!
							</p>
						</li>
						<li>
							<p>Komfortowe stawki rozliczeń:</p>
							<p>- do 150 kursów - 50zł</p>
							<p>- powyżej 150 kurstów - 25zł</p>
						</li>
						<li>
							<p>Wysokie bonusy:</p>
							<p>- polecenie pracownika - 200zł</p>
							<p>- zwrot za badania - 400zł</p>
						</li>
					</ul>
				</div>
				<WorkForm />
			</div>
			<div className='contact__special-block contact__special-block--left' />
			<div className='contact__special-block contact__special-block--right' />
		</section>
	);
};

export default RecruitmentForm;
