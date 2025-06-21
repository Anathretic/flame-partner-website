import { createContext, useState } from 'react';
import { NavbarItemsContextModel, ProviderModel } from '../models/context.model';
import { NavbarItemModel } from '../models/navbar.model';

export const NavbarItemsContext = createContext<NavbarItemsContextModel | null>(null);

const NavbarItemsProvider: React.FC<ProviderModel> = ({ children }) => {
	const [navbarItems, setNavbarItems] = useState<NavbarItemModel[]>([]);
	return <NavbarItemsContext.Provider value={{ navbarItems, setNavbarItems }}>{children}</NavbarItemsContext.Provider>;
};

export default NavbarItemsProvider;
