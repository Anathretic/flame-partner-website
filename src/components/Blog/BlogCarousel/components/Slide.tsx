import { useContext, useRef } from 'react';
import { BlogPopupContext } from '../../../../context/BlogPopupContext';
import { useSlideOptions } from '../../../../hooks/useSlideOptions';
import { BlogSlideDataModel, SlideModel } from '../../../../models/carousel.model';
import { blogPopupActivityToggle } from '../../../../utils/blogPopupActivityToggleUtils';

import styles from '../styles/styles.module.scss';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide as BlogSlideDataModel;
	const slideRef = useRef<HTMLLIElement>(null);
	const { handleMouseLeave, handleMouseMove } = useSlideOptions({ slideRef });

	const slideContext = useContext(BlogPopupContext);

	if (!slideContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { togglePopupVisibility, setSlideItemData } = slideContext;

	const handleBtn = () => {
		togglePopupVisibility();
		setSlideItemData(slide as BlogSlideDataModel);
		blogPopupActivityToggle();
	};

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
				<button className={`${styles.slide__action} ${styles.btn}`} onClick={handleBtn}>
					Przeczytaj
				</button>
			</article>
		</li>
	);
};
