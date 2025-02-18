import { useContext, useRef } from 'react';
import { BlogPopupContext } from '../../../context/BlogPopupContext';
import { SlideModel } from '../../../models/blogCarousel.model';
import { blogPopupActivityToggle } from '../../../utils/blogPopupActivityToggleUtils';

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
				<button className='slide__action btn' onClick={handleBtn}>
					Przeczytaj
				</button>
			</article>
		</li>
	);
};
