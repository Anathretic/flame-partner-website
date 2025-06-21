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
		title: 'Home',
		section: '/',
		onClick: () => scrollToTop(),
	},
	{
		title: 'Informacje',
		section: '/rekrutacja-kierowcow/#informacje',
	},
	{
		title: 'Wymagania',
		section: '/rekrutacja-kierowcow/#wymagania',
	},
	{
		title: 'Formularz',
		section: '/rekrutacja-kierowcow/#formularz',
	},
];

export const rentCarNavbarItems = [
	{
		title: 'Home',
		section: '/',
		onClick: () => scrollToTop(),
	},
	{
		title: 'Informacje',
		section: '/wynajem-samochodu/#informacje',
	},
	{
		title: 'Lista samochodów',
		section: '/wynajem-samochodu/#lista-samochodow',
	},
	{
		title: 'Formularz',
		section: '/wynajem-samochodu/#formularz',
	},
];
