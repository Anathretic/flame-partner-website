export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: () => void;
}

export interface NavbarTitleModel {
	divRef: React.MutableRefObject<HTMLDivElement | null>;
	isScrolled: boolean;
}
