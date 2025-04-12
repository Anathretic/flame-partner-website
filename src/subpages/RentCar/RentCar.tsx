import { RentCarBenefits, RentCarForm, RentCarList } from './components';

const RentCar: React.FC = () => {
	return (
		<main className='rent-car'>
			<div className='rent-car__container'>
				<div className='rent-car__wrapper'>
					<div className='rent-car__hero-image'>
						<h1 className='rent-car__hero-image-title'>Wynajem</h1>
					</div>
					<RentCarBenefits />
					<RentCarList />
					<RentCarForm />
				</div>
			</div>
		</main>
	);
};

export default RentCar;
