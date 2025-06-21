import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogAndArticleData } from '../../hooks/useBlogAndArticleData';
import PageNotFound from '../PageNotFound/PageNotFound';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

const ArticlePage: React.FC = () => {
	const { id } = useParams();
	const { slides } = useBlogAndArticleData();

	const navigate = useNavigate();

	const slide = slides.filter(slide => slide.href.split('/')[1] === id);

	return (
		<>
			{slide.length > 0 ? (
				<>
					<Helmet htmlAttributes={{ lang: 'pl' }}>
						<title>{slide[0].main_title} | Flame Partner</title>
						<meta name='description' content={`${slide[0].text} ${slide[0].specialText}`} />
						<meta property='og:title' content={`${slide[0].main_title} | Flame Partner`} />
						<meta property='og:description' content={`${slide[0].text} ${slide[0].specialText}`} />
						<meta property='og:type' content='article' />
						<meta property='og:url' content={`https://flamepartner.pl/${slide[0].href}`} />
						<link rel='canonical' href={`https://flamepartner.pl/${slide[0].href}`} />
					</Helmet>
					<main>
						<article className={styles.article}>
							<div className={styles.article__container}>
								{slide.length > 0 ? (
									<>
										<h1 className={styles.article__title}>{slide[0].main_title}</h1>
										<p className={styles.article__date}>Data dodania: {slide[0].public_date}</p>
										{slide[0].sections.map((section, index) => (
											<div key={index} className={styles.article__box}>
												<h2>{section.title}</h2>
												<p>{section.content}</p>
											</div>
										))}
										<button
											type='button'
											className={styles.article__btn}
											onClick={() => {
												navigate(-1);
												scrollToTop();
											}}>
											Powrót
										</button>
									</>
								) : (
									<PageNotFound />
								)}
							</div>
							<div className={`${styles['article__special-block']} ${styles['article__special-block--left']}`} />
							<div className={`${styles['article__special-block']} ${styles['article__special-block--right']}`} />
						</article>
					</main>
				</>
			) : (
				<PageNotFound />
			)}
		</>
	);
};

export default ArticlePage;
