import { useRef } from 'react';
import { SlideModel } from '../../../models/blogCarousel.model';

export const Slide: React.FC<SlideModel> = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide;
	const slideRef = useRef<HTMLLIElement>(null);

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current;
		const r = el?.getBoundingClientRect();
		if (r) {
			el?.style.setProperty('--x', (event.clientX - (r.left + Math.floor(r.width / 2))).toString());
			el?.style.setProperty('--y', (event.clientY - (r.top + Math.floor(r.height / 2))).toString());
		}
	};

	const handleMouseLeave = () => {
		if (slideRef.current) {
			slideRef.current.style.setProperty('--x', '0');
			slideRef.current.style.setProperty('--y', '0');
		}
	};

	let classNames = 'slide';

	if (current === id) classNames += ' slide--current';
	else if (current - 1 === id) classNames += ' slide--previous';
	else if (current + 1 === id) classNames += ' slide--next';

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(id)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div className='slide__image-wrapper'>
				<div className={`slide__image slide__image--${id}`} />
			</div>
			<article className='slide__content'>
				<h3 className='slide__headline'>{main_title}</h3>
				<button className='slide__action btn'>Przeczytaj</button>
			</article>
		</li>
	);
};
