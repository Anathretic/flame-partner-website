import { useContext } from 'react';
import { NavbarItemsContext } from '../../context/NavbarItemsContext';

export const useNavbarItemsContext = () => {
	const navbarItemsContext = useContext(NavbarItemsContext);

	if (!navbarItemsContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { navbarItems, setNavbarItems } = navbarItemsContext;

	return { navbarItems, setNavbarItems };
};
