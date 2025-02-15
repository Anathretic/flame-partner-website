import { createContext, useState } from 'react';
import { FooterLinksContextModel } from '../models/footer.model';

export const FooterLinksContext = createContext<FooterLinksContextModel | null>(null);

const FooterLinksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [showSpecialLinks, setShowSpecialLinks] = useState(false);

	return (
		<FooterLinksContext.Provider value={{ showSpecialLinks, setShowSpecialLinks }}>
			{children}
		</FooterLinksContext.Provider>
	);
};

export default FooterLinksProvider;
