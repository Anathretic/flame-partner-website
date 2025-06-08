import { memo } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FaTaxi } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import BoltIcon from '../../images/welcome-section/brand-icons/bolt-icon.jpg';
import UberIcon from '../../images/welcome-section/brand-icons/uber-icon.jpg';
import FreenowIcon from '../../images/welcome-section/brand-icons/freenow-icon.jpg';

import styles from './styles/styles.module.scss';

const Welcome: React.FC = () => {
	return (
		<section className={styles.welcome}>
			<div className={styles.welcome__wrapper}>
				<div className={styles['welcome__text-container']}>
					<div className={styles['welcome__text-box']}>
						<h1 className={styles['welcome__main-text']}>
							z nami <br /> zarobisz <br /> najwięcej!
						</h1>
						<p className={styles['welcome__sub-text']}>
							<span>Flame Partner</span> to rozwijający się partner flotowy na terenie województwa lubelskiego i okolic
						</p>
						<HashLink smooth className={styles['welcome__special-btn']} to='/#oferta'>
							Oferta
						</HashLink>
					</div>
					<FaTaxi
						className={`${styles['welcome__text-container-icon']} ${styles['welcome__text-container-icon--first']}`}
						fontSize={70}
					/>
					<FaTaxi
						className={`${styles['welcome__text-container-icon']} ${styles['welcome__text-container-icon--second']}`}
						fontSize={66}
					/>
					<FaTaxi
						className={`${styles['welcome__text-container-icon']} ${styles['welcome__text-container-icon--third']}`}
						fontSize={54}
					/>
					<FaTaxi
						className={`${styles['welcome__text-container-icon']} ${styles['welcome__text-container-icon--fourth']}`}
						fontSize={62}
					/>
					<FaTaxi
						className={`${styles['welcome__text-container-icon']} ${styles['welcome__text-container-icon--fifth']}`}
						fontSize={80}
					/>
				</div>
			</div>
			<div className={styles['welcome__btn-container']}>
				<div className={styles['welcome__btn-box']}>
					<Link to='/rekrutacja-kierowcow' onClick={scrollToTop} aria-label='Przycisk przenoszący na stronę rekrutacji'>
						<img src={BoltIcon} alt='' />
					</Link>
					<Link to='/rekrutacja-kierowcow' onClick={scrollToTop} aria-label='Przycisk przenoszący na stronę rekrutacji'>
						<img src={UberIcon} alt='' />
					</Link>
					<Link to='/rekrutacja-kierowcow' onClick={scrollToTop} aria-label='Przycisk przenoszący na stronę rekrutacji'>
						<img src={FreenowIcon} alt='' />
					</Link>
				</div>
			</div>
			<div className={styles['welcome__icon-container']}>
				<HashLink
					smooth
					to='/#oferta'
					className={styles['welcome__arrow-icon']}
					aria-label='Przycisk przenoszący do sekcji oferty'>
					<SlArrowDown fontSize={60} color='#f0f0f0' />
				</HashLink>
			</div>
		</section>
	);
};

export default memo(Welcome);
