import { createContext, useMemo, useState } from 'react';
import { FooterLinksContextModel, ProviderModel } from '../models/context.model';

export const FooterLinksContext = createContext<FooterLinksContextModel | null>(null);

const FooterLinksProvider: React.FC<ProviderModel> = ({ children }) => {
	const [showSpecialLinks, setShowSpecialLinks] = useState(false);

	const contextValue = useMemo(() => ({ showSpecialLinks, setShowSpecialLinks }), [showSpecialLinks]);

	return <FooterLinksContext.Provider value={contextValue}>{children}</FooterLinksContext.Provider>;
};

export default FooterLinksProvider;
