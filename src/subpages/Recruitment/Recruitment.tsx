import { useEffect } from 'react';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { RecruitmentBenefits, RecruitmentForm, RecruitmentBanner } from './components';

import styles from './styles/styles.module.scss';

const Recruitment: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<main className={styles.recruitment}>
			<div className={styles.recruitment__container}>
				<div className={styles.recruitment__wrapper}>
					<div className={styles['recruitment__hero-image']}>
						<h1 className={styles['recruitment__hero-image-title']}>Rekrutacja</h1>
					</div>
					<RecruitmentBenefits />
					<RecruitmentBanner />
					<RecruitmentForm />
				</div>
			</div>
		</main>
	);
};

export default Recruitment;
