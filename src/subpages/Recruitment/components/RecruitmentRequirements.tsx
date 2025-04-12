import { memo } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
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
					<h3>
						3. Twoje auto lub{' '}
						<Link to='/wynajem' onClick={scrollToTop}>
							nasze auto
						</Link>
					</h3>
				</div>
				<div className='work-offer__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>4. Telefon lub tablet</h3>
				</div>
			</div>
			<div className='work-offer__banner-special-block work-offer__banner-special-block--left' />
			<div className='work-offer__banner-special-block work-offer__banner-special-block--right' />
		</section>
	);
};

export default memo(RecruitmentRequirements);
