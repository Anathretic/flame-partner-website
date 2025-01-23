export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
