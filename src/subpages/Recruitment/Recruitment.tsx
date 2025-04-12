import { useEffect } from 'react';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { RecruitmentBenefits, RecruitmentForm, RecruitmentRequirements } from './components';

const Recruitment: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<main className='work-offer'>
			<div className='work-offer__container'>
				<div className='work-offer__wrapper'>
					<div className='work-offer__hero-image'>
						<h1 className='work-offer__hero-image-title'>Rekrutacja</h1>
					</div>
					<RecruitmentBenefits />
					<RecruitmentRequirements />
					<RecruitmentForm />
				</div>
			</div>
		</main>
	);
};

export default Recruitment;
