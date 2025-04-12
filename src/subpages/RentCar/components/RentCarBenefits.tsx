import { memo } from 'react';
import { TbPackages } from 'react-icons/tb';

const RentCarBenefits: React.FC = () => {
	return (
		<section className='rent-car__benefits'>
			<h2 className='rent-car__title'>Twoje korzyści</h2>
			<div className='rent-car__benefits-text-content'>
				<div className='rent-car__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic dolorem explicabo adipisci debitis odit
						dolor minima architecto. <span>Lorem ipsum dolor sit.</span>
					</p>
				</div>
				<div className='rent-car__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic dolorem explicabo adipisci debitis odit
						dolor minima architecto. <span>Lorem ipsum dolor sit.</span>
					</p>
				</div>
				<div className='rent-car__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic dolorem explicabo adipisci debitis odit
						dolor minima architecto. <span>Lorem ipsum dolor sit.</span>
					</p>
				</div>
				<div className='rent-car__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic dolorem explicabo adipisci debitis odit
						dolor minima architecto. <span>Lorem ipsum dolor sit.</span>
					</p>
				</div>
			</div>
			<div className='rent-car__benefits-special-block rent-car__benefits-special-block--left' />
			<div className='rent-car__benefits-special-block rent-car__benefits-special-block--right' />
		</section>
	);
};

export default memo(RentCarBenefits);
