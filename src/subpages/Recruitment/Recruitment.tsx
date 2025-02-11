import { RecruitmentBenefits, RecruitmentForm, RecruitmentRequirements } from './components';

const Recruitment: React.FC = () => {
	return (
		<div className='work-offer'>
			<div className='work-offer__container'>
				<div className='work-offer__wrapper'>
					<RecruitmentBenefits />
					<RecruitmentRequirements />
					<RecruitmentForm />
				</div>
			</div>
		</div>
	);
};

export default Recruitment;
