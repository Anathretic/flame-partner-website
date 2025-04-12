import { memo } from 'react';

const RentCarList: React.FC = () => {
	return (
		<section className='rent-car__list'>
			<h2 className='rent-car__title rent-car__title--special'>Lista dostępnych samochodów</h2>
			<div className='rent-car__list-container'></div>
			<div className='rent-car__list-special-block rent-car__list-special-block--left' />
			<div className='rent-car__list-special-block rent-car__list-special-block--right' />
		</section>
	);
};

export default memo(RentCarList);
