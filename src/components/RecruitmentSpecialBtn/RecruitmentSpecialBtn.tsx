import { Link } from 'react-router-dom';

import styles from './styles/styles.module.scss';

const RecruitmentSpecialBtn: React.FC = () => {
	return (
		<Link to='/rekrutacja-kierowcow' className={styles['recruitment-special-btn']}>
			Aplikuj
		</Link>
	);
};

export default RecruitmentSpecialBtn;
