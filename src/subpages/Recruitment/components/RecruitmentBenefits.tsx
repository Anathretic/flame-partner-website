import { FaCalendarAlt } from 'react-icons/fa';
import { GiCoinsPile } from 'react-icons/gi';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import { TbPackages } from 'react-icons/tb';

const RecruitmentBenefits: React.FC = () => {
	return (
		<section className='work-offer__benefits'>
			<h2 className='work-offer__title'>Dlaczego my?</h2>
			<div className='work-offer__text-content'>
				<div className='work-offer__text-content-box'>
					<HiMiniCurrencyDollar fontSize={56} color='#24485c' />
					<h3>Konkurencyjne zarobki</h3>
					<p>
						Średnie zarobki naszych kierowców osiągają nawet 3250 zł tygodniowo! Nasi najlepsi kierowcy potrafią zarobić{' '}
						<span>nawet 9000 zł miesięcznie.</span>
					</p>
				</div>
				<div className='work-offer__text-content-box'>
					<FaCalendarAlt fontSize={56} color='#24485c' />
					<h3>Elastyczny grafik</h3>
					<p>
						Sam ustalasz sobie grafik, co zapewnia Ci elastyczność i możliwość największego zarobku.{' '}
						<span>Tylko Ty kontrolujesz wysokość wynagrodzenia</span> i ilość przepracowanych godzin!
					</p>
				</div>
				<div className='work-offer__text-content-box'>
					<GiCoinsPile fontSize={56} color='#24485c' />
					<h3>Przejrzysty system rozliczeń</h3>
					<p>
						Jeśli udało Ci się osiągnąć bardzo wysoką ilość kursów, to nasza usługa rozliczeniowa będzie Cię kosztować
						<span> zaledwie 1 złotówkę.</span> U Nas nie ma haczyków!
					</p>
				</div>
				<div className='work-offer__text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Pakiet benefitów</h3>
					<p>
						Ekstra dodatki dla kierowców, które wynagrodzą ciężką pracę - <span>stawki gwarantowane</span>, system
						bonusów lub pieniądze za polecanie nowych kierowców.
					</p>
				</div>
			</div>
			<div className='work-offer__benefits-special-block work-offer__benefits-special-block--left' />
			<div className='work-offer__benefits-special-block work-offer__benefits-special-block--right' />
		</section>
	);
};

export default RecruitmentBenefits;
