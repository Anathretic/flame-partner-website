import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SubpageLoader } from '../Loader/Loader';
import { SuspenseWithFooterModel } from '../../models/footer.model';

const Footer = lazy(() => import('./Footer'));

const SuspenseWithFooter: React.FC<SuspenseWithFooterModel> = ({ children, subpageIsLoading, setSubpageIsLoading }) => {
	const location = useLocation();

	useEffect(() => {
		if (!subpageIsLoading && setSubpageIsLoading) setSubpageIsLoading(true);
	}, [location.pathname]);

	return (
		<Suspense key={location.pathname} fallback={<SubpageLoader />}>
			{children}
			<Footer />
		</Suspense>
	);
};

export default SuspenseWithFooter;
