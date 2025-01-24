import { FooterItemsModel } from '../../../models/footerItems.model';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

export const footerHomeItems: FooterItemsModel[] = [
	{ to: '/#oferta', content: 'Oferta' },
	{ to: '/#wybierz-nas', content: 'Wybierz Nas' },
	{ to: '/#kontakt', content: 'Kontakt' },
];

export const footerWorkItems: FooterItemsModel[] = [
	{ to: '/praca-w-bolt', onClick: scrollToTop, content: 'Praca w Bolt' },
	{ to: '/praca-w-uber', onClick: scrollToTop, content: 'Praca w Uber' },
	{ to: '/praca-we-freenow', onClick: scrollToTop, content: 'Praca we FreeNow' },
	{ to: '/cennik', onClick: scrollToTop, content: 'Cennik' },
];

export const footerMoreItems: FooterItemsModel[] = [
	{ to: '/blog', onClick: scrollToTop, content: 'Blog' },
	{ to: '/polityka-prywatnosci', onClick: scrollToTop, content: 'Polityka prywatności' },
];
