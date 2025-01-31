import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollToTop } from '../utils/scrollToTopUtils';
import { FaTaxi } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import BoltIcon from '../images/welcome-section/brand-icons/bolt-icon.jpg';
import UberIcon from '../images/welcome-section/brand-icons/uber-icon.jpg';
import FreenowIcon from '../images/welcome-section/brand-icons/freenow-icon.jpg';

const Welcome: React.FC = () => {
	return (
		<section className='welcome'>
			<div className='welcome__wrapper'>
				<div className='welcome__text-container'>
					<div className='welcome__text-box'>
						<p className='welcome__main-text'>
							z nami <br /> zarobisz <br /> najwięcej!
						</p>
						<span className='welcome__sub-text'>
							Twój rekomendowany partner <span>Bolt</span>
						</span>
						<HashLink className='welcome__special-btn' to='/#oferta'>
							Oferta
						</HashLink>
					</div>
					<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--first' fontSize={70} />
					<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--second' fontSize={66} />
					<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--third' fontSize={54} />
					<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--fourth' fontSize={62} />
					<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--fifth' fontSize={80} />
				</div>
			</div>
			<div className='welcome__btn-container'>
				<div className='welcome__btn-box'>
					<Link to='/praca-w-bolt' onClick={scrollToTop}>
						<img src={BoltIcon} alt='' />
					</Link>
					<Link to='/praca-w-uber' onClick={scrollToTop}>
						<img src={UberIcon} alt='' />
					</Link>
					<Link to='praca-we-freenow' onClick={scrollToTop}>
						<img src={FreenowIcon} alt='' />
					</Link>
				</div>
			</div>
			<div className='welcome__icon-container'>
				<HashLink smooth to='/#oferta' className='welcome__arrow-icon'>
					<SlArrowDown fontSize={60} color='#f0f0f0' />
				</HashLink>
			</div>
		</section>
	);
};

export default Welcome;
