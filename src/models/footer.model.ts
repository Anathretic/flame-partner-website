import { ReactNode } from 'react';

export interface FooterItemsModel {
	to: string;
	content: string;
}

export interface SuspenseWithFooterModel {
	children: ReactNode;
	subpageIsLoading?: boolean;
	setSubpageIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
