import { Car } from './forms.model';
import { NavbarItemModel } from './navbar.model';

export type ProviderModel = {
	children: React.ReactNode;
};

export interface NavbarItemsContextModel {
	navbarItems: NavbarItemModel[];
	setNavbarItems: React.Dispatch<React.SetStateAction<NavbarItemModel[]>>;
}

export interface FooterLinksContextModel {
	showSpecialLinks: boolean;
	setShowSpecialLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CarSelectContextModel {
	selectedCar: Car;
	setSelectedCar: React.Dispatch<React.SetStateAction<Car>>;
}
