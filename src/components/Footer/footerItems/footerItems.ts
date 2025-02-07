import { FooterItemsModel } from '../../../models/footerItems.model';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

export const footerHomeItems: FooterItemsModel[] = [
	{ to: '/#oferta', content: 'Oferta' },
	{ to: '/#wybierz-nas', content: 'Wybierz Nas' },
	{ to: '/#kontakt', content: 'Kontakt' },
];

export const footerWorkItems: FooterItemsModel[] = [
	{ to: '/oferta-pracy', onClick: scrollToTop, content: 'Praca w Bolt' },
	{ to: '/oferta-pracy', onClick: scrollToTop, content: 'Praca w Uber' },
	{ to: '/oferta-pracy', onClick: scrollToTop, content: 'Praca we FreeNow' },
];
