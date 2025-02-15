import { useEffect } from 'react';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { HomeWrapperProps } from '../../models/homeWrapper.model';

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	return <main>{children}</main>;
};

export default HomeWrapper;
