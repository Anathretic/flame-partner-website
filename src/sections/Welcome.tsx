import { FaTaxi } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

import BoltIcon from '../images/welcome-section/brand-icons/bolt-icon.jpg';
import UberIcon from '../images/welcome-section/brand-icons/uber-icon.jpg';
import FreenowIcon from '../images/welcome-section/brand-icons/freenow-icon.jpg';

const Welcome: React.FC = () => {
	return (
		<section className='welcome'>
			<div className='welcome__text-container'>
				<div className='welcome__text-box'>
					<p className='welcome__special-text'>
						z nami <br /> zarobisz <br /> najwięcej!
					</p>
					<span className='welcome__special-subtext'>
						Twój rekomendowany partner <span>Bolt</span>
					</span>
					<HashLink className='welcome__special-button' to='/#oferta'>
						Oferta
					</HashLink>
				</div>
				<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--first' fontSize={70} />
				<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--second' fontSize={66} />
				<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--third' fontSize={54} />
				<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--fourth' fontSize={62} />
				<FaTaxi className='welcome__text-container-icon welcome__text-container-icon--fifth' fontSize={80} />
			</div>
			<div className='welcome__image-container'>
				<div className='welcome__image-button-box'>
					<img src={BoltIcon} alt='' />
					<img src={UberIcon} alt='' />
					<img src={FreenowIcon} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Welcome;
