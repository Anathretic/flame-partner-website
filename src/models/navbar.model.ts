export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export interface NavbarTitleModel {
	divRef: React.MutableRefObject<HTMLDivElement | null>;
	isScrolled: boolean;
}
