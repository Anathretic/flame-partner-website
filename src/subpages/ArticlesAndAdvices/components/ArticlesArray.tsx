import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useBlogAndArticleData } from '../../../hooks/useBlogAndArticleData';
import { ArticleItem } from './ArticleItem';
import { Loader } from '../../../components/Loader/Loader';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

const ArticlesArray: React.FC = () => {
	const { slides, isLoading, error } = useBlogAndArticleData();

	return (
		<section className={styles.articles__array}>
			<h2 className={styles.articles__title}>Dowiedz się więcej</h2>
			<div className={styles['articles__array-container']}>
				{isLoading ? (
					<Loader classname={styles['articles__loader']} />
				) : error ? (
					<div className={styles['articles__error-box']}>
						<p>Niestety wystąpił błąd pobierania..</p>
					</div>
				) : (
					<>
						{slides.map(slide => (
							<ArticleItem
								key={slide.id}
								image={slide.image}
								title={slide.main_title}
								text={slide.text}
								specialText={slide.specialText}
								href={slide.href}
							/>
						))}
					</>
				)}
			</div>
			{!isLoading && (
				<Link to='/' className={styles['articles__btn']} aria-label='Powrót na stronę główną' onClick={scrollToTop}>
					Powrót
				</Link>
			)}
		</section>
	);
};

export default memo(ArticlesArray);
