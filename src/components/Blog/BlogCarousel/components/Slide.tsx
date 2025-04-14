import { useContext, useRef } from 'react';
import { BlogPopupContext } from '../../../../context/BlogPopupContext';
import { blogPopupActivityToggle } from '../../../../utils/blogPopupActivityToggleUtils';
import { SlideModel } from '../../../../models/blogCarousel.model';

import styles from '../styles/styles.module.scss';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide;
	const slideRef = useRef<HTMLLIElement>(null);

	const slideContext = useContext(BlogPopupContext);

	if (!slideContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { togglePopupVisibility, setSlideItemData } = slideContext;

	const handleMouseMove = (e: React.MouseEvent) => {
		const el = slideRef.current;
		const r = el?.getBoundingClientRect();
		if (r) {
			el?.style.setProperty('--x', (e.clientX - (r.left + Math.floor(r.width / 2))).toString());
			el?.style.setProperty('--y', (e.clientY - (r.top + Math.floor(r.height / 2))).toString());
		}
	};

	const handleMouseLeave = () => {
		if (slideRef.current) {
			slideRef.current.style.setProperty('--x', '0');
			slideRef.current.style.setProperty('--y', '0');
		}
	};

	const handleBtn = () => {
		togglePopupVisibility();
		setSlideItemData(slide);
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
