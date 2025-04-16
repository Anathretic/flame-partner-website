import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useSlideOptions } from '../../../../hooks/useSlideOptions';
import { RentCarSlideDataModel, SlideModel } from '../../../../models/carousel.model';

import styles from '../styles/styles.module.scss';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick }) => {
	const { id, main_title, combustion, advantages, price } = slide as RentCarSlideDataModel;
	const slideRef = useRef<HTMLLIElement>(null);
	const { handleMouseLeave, handleMouseMove } = useSlideOptions({ slideRef });

	let classNames = `${styles.slide} `;

	if (current === id) classNames += styles['slide--current'];
	else if (current - 1 === id) classNames += styles['slide--previous'];
	else if (current + 1 === id) classNames += styles['slide--next'];

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(id)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div className={styles['slide__image-wrapper']}>
				<div className={`${styles['slide__image']} ${styles[`slide__image--${id}`]}`} />
			</div>
			<article className={styles.slide__content}>
				<h3 className={styles.slide__headline}>{main_title}</h3>
				<div className={styles['slide__car-content']}>
					<div className={styles['slide__car-content-box']}>
						<h4>Spalanie:</h4>
						<span>{combustion}</span>
					</div>
					<div className={styles['slide__car-content-box']}>
						<h4>Zalety:</h4>
						<span>{advantages}</span>
					</div>
					<div className={styles['slide__car-content-box']}>
						<h4>Cena:</h4>
						<span>{price}</span>
					</div>
				</div>
				<HashLink to={'/wynajem-samochodu/#formularz'} className={`${styles.slide__action} ${styles.btn}`}>
					Wybieram
				</HashLink>
			</article>
		</li>
	);
};
