import { useContext } from 'react';
import { BlogPopupContext } from '../../../context/BlogPopupContext';
import { blogPopupActivityToggle } from '../../../utils/blogPopupActivityToggleUtils';

import styles from './styles/styles.module.scss';

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
				<div className={styles['blog-popup']}>
					<div className={styles['blog-popup__container']}>
						{slideItemData && (
							<>
								<h4 className={styles['blog-popup__title']}>{slideItemData.main_title}</h4>
								<p className={styles['blog-popup__public-date']}>Opublikowano: {slideItemData.public_date}</p>
								<div className={styles['blog-popup__content-container']}>
									{slideItemData.sections.map((el, id) => (
										<div key={id} className={styles['blog-popup__content-box']}>
											<h4 className={styles['blog-popup__content-title']}>{el.title}</h4>
											<p className={styles['blog-popup__content-text']}>{el.content}</p>
										</div>
									))}
									<button type='button' className={styles['blog-popup__close-btn']} onClick={handleCloseBtn}>
										Zamknij
									</button>
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
