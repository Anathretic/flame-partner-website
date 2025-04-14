import { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { SubpageLoader } from '../Loader/Loader';
import { SuspenseWithFooterModel } from '../../models/footer.model';

const Footer = lazy(() => import('./Footer'));

const SuspenseWithFooter: React.FC<SuspenseWithFooterModel> = ({ children }) => {
	const location = useLocation();

	return (
		<Suspense key={location.pathname} fallback={<SubpageLoader />}>
			{children}
			<Footer />
		</Suspense>
	);
};

export default SuspenseWithFooter;
