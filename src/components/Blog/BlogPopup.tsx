import { useContext } from 'react';
import { BlogPopupContext } from '../../context/BlogPopupContext';
import { blogPopupActivityToggle } from '../../utils/blogPopupActivityToggleUtils';

const BlogPopup: React.FC = () => {
	const slideContext = useContext(BlogPopupContext);

	if (!slideContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { showPopup, togglePopupVisibility, slideItemData, setSlideItemData } = slideContext;

	const handleCloseBtn = () => {
		togglePopupVisibility();
		blogPopupActivityToggle();
		setSlideItemData(undefined);
	};

	return (
		<>
			{showPopup ? (
				<div className='blog-popup'>
					<div className='blog-popup__container'>
						<button type='button' className='blog-popup__close-btn' onClick={handleCloseBtn}>
							X
						</button>
						{slideItemData && (
							<>
								<h3>{slideItemData.main_title}</h3>
								<div>
									{slideItemData.text_array.map(el => (
										<div key={el.id}>
											<h4>{el.title}</h4>
											<p>{el.content}</p>
										</div>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default BlogPopup;
