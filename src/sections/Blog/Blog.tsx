import { memo, useEffect, useState } from 'react';
import { BlogCarousel } from '../../components/Blog/BlogCarousel/BlogCarousel';
import { Loader } from '../../components/Loader/Loader';
import { getBlogData } from '../../helpers/getBlogDataHelper';
import { SlideDataModel } from '../../models/blogCarousel.model';

import styles from './styles/styles.module.scss';

const Blog: React.FC = () => {
	const [slides, setSlides] = useState<SlideDataModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const BlogCarouselMemoized = memo(BlogCarousel);

	useEffect(() => {
		if (isLoading) getBlogData({ setSlides, setIsLoading, setError });
	}, [isLoading]);

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
						<Loader className={styles.blog__loader} />
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
