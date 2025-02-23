import { createContext, useMemo, useState } from 'react';
import { FooterLinksContextModel } from '../models/footer.model';

export const FooterLinksContext = createContext<FooterLinksContextModel | null>(null);

const FooterLinksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [showSpecialLinks, setShowSpecialLinks] = useState(false);

	const contextValue = useMemo(() => ({ showSpecialLinks, setShowSpecialLinks }), [showSpecialLinks]);

	return <FooterLinksContext.Provider value={contextValue}>{children}</FooterLinksContext.Provider>;
};

export default FooterLinksProvider;
