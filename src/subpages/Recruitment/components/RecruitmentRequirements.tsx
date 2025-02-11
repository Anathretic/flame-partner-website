import { FaAddressCard, FaCarAlt, FaRegUser, FaTabletAlt } from 'react-icons/fa';

const RecruitmentRequirements: React.FC = () => {
	return (
		<section className='work-offer__banner'>
			<h2 className='work-offer__title work-offer__title--special'>Czego potrzebujesz?</h2>
			<div className='work-offer__banner-container'>
				<div className='work-offer__banner-container-box'>
					<FaRegUser fontSize={56} color='#edf0f5' />
					<h3>1. Jesteś osobą pełnoletnią</h3>
				</div>
				<div className='work-offer__banner-container-box'>
					<FaAddressCard fontSize={56} color='#edf0f5' />
					<h3>2. Aktywne prawo jazdy</h3>
				</div>
				<div className='work-offer__banner-container-box'>
					<FaCarAlt fontSize={56} color='#edf0f5' />
					<h3>3. Twoje auto lub nasze auto</h3>
				</div>
				<div className='work-offer__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>4. Telefon lub tablet</h3>
				</div>
			</div>
			<div className='blog__special-block blog__special-block--left' />
			<div className='blog__special-block blog__special-block--right' />
		</section>
	);
};

export default RecruitmentRequirements;
