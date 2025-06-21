import { useContext } from 'react';
import { FooterLinksContext } from '../../context/FooterLinksContext';

export const useFooterLinksContext = () => {
	const footerContext = useContext(FooterLinksContext);

	if (!footerContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { showSpecialLinks, setShowSpecialLinks } = footerContext;

	return { showSpecialLinks, setShowSpecialLinks };
};
