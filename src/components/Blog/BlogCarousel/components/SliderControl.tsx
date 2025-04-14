import { SliderControlModel } from '../../../../models/blogCarousel.model';

import styles from '../styles/styles.module.scss';

export const SliderControl: React.FC<SliderControlModel> = ({ type, title, handleClick }) => {
	return (
		<button type='button' className={`${styles.btn} ${styles[`btn--${type}`]}`} title={title} onClick={handleClick}>
			<svg className={styles.icon} viewBox='0 0 24 24'>
				<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
			</svg>
		</button>
	);
};
