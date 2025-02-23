import { LoaderModel } from '../models/formElements.model';

export const Loader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};

export const SubpageLoader: React.FC = () => {
	return (
		<div className='subpage-loader'>
			<div className='subpage-loader__spinner' />
		</div>
	);
};
