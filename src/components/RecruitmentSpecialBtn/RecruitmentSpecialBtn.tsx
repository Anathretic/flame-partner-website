import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

const RecruitmentSpecialBtn: React.FC = () => {
	return (
		<Link to='/rekrutacja-kierowcow' className={styles['recruitment-special-btn']} onClick={scrollToTop}>
			Aplikuj
		</Link>
	);
};

export default RecruitmentSpecialBtn;
