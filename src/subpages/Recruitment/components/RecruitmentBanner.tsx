import { memo } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { FaAddressCard, FaCarAlt, FaRegUser, FaTabletAlt } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

const RecruitmentBanner: React.FC = () => {
	return (
		<section className={styles.recruitment__banner}>
			<h2 className={`${styles['recruitment__title']} ${styles['recruitment__title--special']}`}>
				Czego potrzebujesz?
			</h2>
			<div className={styles['recruitment__banner-container']}>
				<div className={styles['recruitment__banner-container-box']}>
					<FaRegUser fontSize={56} color='#edf0f5' />
					<h3>1. Jesteś osobą pełnoletnią</h3>
				</div>
				<div className={styles['recruitment__banner-container-box']}>
					<FaAddressCard fontSize={56} color='#edf0f5' />
					<h3>2. Aktywne prawo jazdy</h3>
				</div>
				<div className={styles['recruitment__banner-container-box']}>
					<FaCarAlt fontSize={56} color='#edf0f5' />
					<h3>
						3. Twoje auto lub{' '}
						<Link to='/wynajem' onClick={scrollToTop}>
							nasze auto
						</Link>
					</h3>
				</div>
				<div className={styles['recruitment__banner-container-box']}>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>4. Telefon lub tablet</h3>
				</div>
			</div>
			<div
				className={`${styles['recruitment__banner-special-block']} ${styles['recruitment__banner-special-block--left']}`}
			/>
			<div
				className={`${styles['recruitment__banner-special-block']} ${styles['recruitment__banner-special-block--right']}`}
			/>
		</section>
	);
};

export default memo(RecruitmentBanner);
