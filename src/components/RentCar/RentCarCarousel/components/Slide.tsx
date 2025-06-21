import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSlideOptions } from '../../../../hooks/useSlideOptions';
import { useCarSelectContext } from '../../../../hooks/contextHooks/useCarSelectContext';
import { SlideModel } from '../../../../models/carousel.model';
import { RentCarDataModel } from '../../../../models/data.model';
import { Car } from '../../../../models/forms.model';

import styles from '../styles/styles.module.scss';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick, formRef }) => {
	const { id, main_title, combustion, advantages, price } = slide as RentCarDataModel;
	const slideRef = useRef<HTMLLIElement>(null);
	const navigate = useNavigate();
	const { handleMouseLeave, handleMouseMove } = useSlideOptions({ slideRef });
	const { setSelectedCar } = useCarSelectContext();

	let classNames = `${styles.slide} `;

	if (current === id) classNames += styles['slide--current'];
	else if (current - 1 === id) classNames += styles['slide--previous'];
	else if (current + 1 === id) classNames += styles['slide--next'];

	const handleSlideBtn = () => {
		setSelectedCar(main_title as Car);
		if (formRef) formRef.current?.scrollIntoView({ behavior: 'smooth' });
		navigate('#formularz', { replace: true });
	};

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
			<div className={styles.slide__content}>
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
				<button type='button' onClick={handleSlideBtn} className={`${styles.slide__action} ${styles.btn}`}>
					Wybieram
				</button>
			</div>
		</li>
	);
};
