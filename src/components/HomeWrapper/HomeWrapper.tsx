import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavbarItemsContext } from '../../hooks/contextHooks/useNavbarItemsContext';
import { useFooterLinksContext } from '../../hooks/contextHooks/useFooterLinksContext';
import { useCarSelectContext } from '../../hooks/contextHooks/useCarSelectContext';
import { homeNavbarItems } from '../Navbar/components/navbarData/navbarItems';
import { HomeWrapperModel } from '../../models/homeWrapper.model';

const HomeWrapper: React.FC<HomeWrapperModel> = ({ children }) => {
	const { setNavbarItems } = useNavbarItemsContext();
	const { setShowSpecialLinks } = useFooterLinksContext();
	const { setSelectedCar } = useCarSelectContext();

	useEffect(() => {
		setNavbarItems(homeNavbarItems);
	}, []);

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	useEffect(() => {
		setSelectedCar('');
	}, []);

	return (
		<>
			<Helmet>
				<title>Kierowca Bolt - Uber - FreeNow | Flame Partner | Lublin - Zamość</title>
				<meta
					name='description'
					content='Rozwijający się partner flotowy na terenie województwa lubelskiego. Największe zarobki, prostota rozliczeń, jasna współpraca!'
				/>
				<meta property='og:title' content='Kierowca Bolt - Uber - FreeNow | Flame Partner | Lublin - Zamość' />
				<meta
					property='og:description'
					content='Rozwijający się partner flotowy na terenie województwa lubelskiego. Największe zarobki, prostota rozliczeń, jasna współpraca!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl' />
				<link rel='canonical' href='https://flamepartner.pl/' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};

export default HomeWrapper;
