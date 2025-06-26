import { scrollToTop } from '../../../../utils/scrollToTopUtils';

export const homeNavbarItems = [
	{
		title: 'Oferta',
		section: '/#oferta',
	},
	{
		title: 'Wybierz nas',
		section: '/#wybierz-nas',
	},
	{
		title: 'Blog',
		section: '/#blog',
	},
	{
		title: 'Kontakt',
		section: '/#kontakt',
	},
];

export const recruitmentNavbarItems = [
	{
		title: 'Strona główna',
		section: '/',
		onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => scrollToTop(e),
	},
	{
		title: 'Informacje',
		section: '#informacje',
	},
	{
		title: 'Wymagania',
		section: '#wymagania',
	},
	{
		title: 'Formularz',
		section: '#formularz',
	},
];

export const rentCarNavbarItems = [
	{
		title: 'Strona główna',
		section: '/',
		onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => scrollToTop(e),
	},
	{
		title: 'Informacje',
		section: '#informacje',
	},
	{
		title: 'Lista samochodów',
		section: '#lista-samochodow',
	},
	{
		title: 'Formularz',
		section: '#formularz',
	},
];
