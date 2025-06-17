import { memo } from 'react';
import { useBlogAndArticleData } from '../../hooks/useBlogAndArticleData';
import { BlogCarousel } from '../../components/Blog/BlogCarousel/BlogCarousel';
import { Loader } from '../../components/Loader/Loader';

import styles from './styles/styles.module.scss';

const Blog: React.FC = () => {
	const BlogCarouselMemoized = memo(BlogCarousel);

	const { slides, isLoading, error, setIsLoading, setError } = useBlogAndArticleData();

	const handleReFetchButton = () => {
		setError(false);
		setIsLoading(true);
	};

	return (
		<section id='blog' className={styles.blog}>
			<div className={styles.blog__container}>
				<div className={styles.blog__wrapper}>
					<h2 className={styles.blog__title}>Blog</h2>
					{isLoading ? (
						<Loader />
					) : error ? (
						<div className={styles['blog__error-box']}>
							<p>Niestety wystąpił błąd.. Spróbuj jeszcze raz!</p>
							<button type='button' onClick={handleReFetchButton}>
								Pobierz
							</button>
						</div>
					) : (
						<BlogCarouselMemoized slides={slides} />
					)}
				</div>
			</div>
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--left']}`} />
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--right']}`} />
		</section>
	);
};

export default Blog;
