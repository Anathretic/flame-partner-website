import { ReactNode } from 'react';

export interface FooterItemsModel {
	to: string;
	content: string;
}

export interface FooterLinksContextModel {
	showSpecialLinks: boolean;
	setShowSpecialLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SuspenseWithFooterModel {
	children: ReactNode;
}
