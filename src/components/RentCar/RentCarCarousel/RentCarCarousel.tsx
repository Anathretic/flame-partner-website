import { useState } from 'react';
import { useCarouselOptions } from '../../../hooks/useCarouselOptions';
import { Slide } from './components/Slide';
import { SliderControl } from './components/SliderControl';
import { SliderModel } from '../../../models/carousel.model';

import styles from './styles/styles.module.scss';

export const RentCarCarousel: React.FC<SliderModel> = ({ slides, formRef }) => {
	const [current, setCurrent] = useState(0);

	const { handleNextClick, handlePreviousClick, handleSlideClick, wrapperTransform } = useCarouselOptions({
		setCurrent,
		current,
		slides,
	});

	return (
		<div className={styles.slider}>
			<ul className={styles.slider__wrapper} style={wrapperTransform}>
				{slides.map(slide => (
					<Slide key={slide.id} slide={slide} current={current} handleSlideClick={handleSlideClick} formRef={formRef} />
				))}
			</ul>
			<div className={styles.slider__controls}>
				<SliderControl type='previous' title='Poprzedni slajd' handleClick={handlePreviousClick} />
				<SliderControl type='next' title='Następny slajd' handleClick={handleNextClick} />
			</div>
		</div>
	);
};
