import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { ArticleItemModel } from '../../../models/articlesAndAdvices.model';

import styles from '../styles/styles.module.scss';

export const ArticleItem: React.FC<ArticleItemModel> = ({ image, title, text, specialText, href }) => {
	const articleImage = `/${image}.jpg`;

	return (
		<div className={styles['articles__array-box']}>
			<div className={styles['articles__array-box-image']}>
				<img src={articleImage} alt='Obrazek przedstawiający temat artykułu' />
			</div>
			<h3>{title}</h3>
			<p>
				{text} <span>{specialText}</span>
			</p>
			<Link to={`/${href}`} onClick={scrollToTop}>
				Przeczytaj
			</Link>
		</div>
	);
};
