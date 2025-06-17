import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSlideOptions } from '../../../../hooks/useSlideOptions';
import { scrollToTop } from '../../../../utils/scrollToTopUtils';
import { SlideModel } from '../../../../models/carousel.model';
import { BlogAndArticleDataModel } from '../../../../models/data.model';

import styles from '../styles/styles.module.scss';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick }) => {
	const { id, main_title, href, image } = slide as BlogAndArticleDataModel;
	const slideRef = useRef<HTMLLIElement>(null);
	const { handleMouseLeave, handleMouseMove } = useSlideOptions({ slideRef });
	const articleImage = `/${image}.jpg`;

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
				<img src={articleImage} alt='Obrazek przedstawiający temat artykułu' className={styles.slide__image} />
			</div>
			<div className={styles.slide__content}>
				<h3 className={styles.slide__headline}>{main_title}</h3>
				<Link to={`/${href}`} className={`${styles.slide__action} ${styles.btn}`} onClick={scrollToTop}>
					Przeczytaj
				</Link>
			</div>
		</li>
	);
};
