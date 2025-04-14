import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export const Loader: React.FC = () => {
	return (
		<div className={styles.loader}>
			<div className={`${styles.loader__spinner} ${animations['loader-animation']}`} />
		</div>
	);
};

export const SubpageLoader: React.FC = () => {
	return (
		<div className={styles['subpage-loader']}>
			<div className={`${styles['subpage-loader__spinner']} ${animations['loader-animation']}`} />
		</div>
	);
};
