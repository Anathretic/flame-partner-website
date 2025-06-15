import { useEffect } from 'react';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';
import { useCarSelectContext } from '../../hooks/useCarSelectContext';
import { HomeWrapperProps } from '../../models/homeWrapper.model';
import { Helmet } from 'react-helmet-async';

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
	const { setShowSpecialLinks } = useFooterLinksContext();
	const { setSelectedCar } = useCarSelectContext();

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	useEffect(() => {
		setSelectedCar('');
	});

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
