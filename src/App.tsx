import { lazy } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, HomeWrapper, SuspenseWithFooter } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { delaySubpageImport } from './helpers/delaySubpageImport';

const Recruitment = lazy(() => delaySubpageImport(() => import('./subpages/Recruitment/Recruitment'), 1000));
const RentCar = lazy(() => delaySubpageImport(() => import('./subpages/RentCar/RentCar'), 1000));
const ArticlesAndAdvices = lazy(() =>
	delaySubpageImport(() => import('./subpages/ArticlesAndAdvices/ArticlesAndAdvices'), 1000)
);
const ArticlePage = lazy(() => delaySubpageImport(() => import('./subpages/ArticlePage/ArticlePage'), 1000));
const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('./subpages/PrivacyPolicy/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('./subpages/PageNotFound/PageNotFound'), 1000));

export const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route
					element={
						<>
							<Outlet />
							<CookieBanner />
						</>
					}>
					<Route
						path='/'
						element={
							<>
								<Navbar />
								<HomeWrapper>
									<Welcome />
									<Offer />
									<ChooseUs />
									<Blog />
									<Contact />
								</HomeWrapper>
								<Footer />
							</>
						}
					/>
					<Route path='/rekrutacja-kierowcow' element={<SuspenseWithFooter children={<Recruitment />} />} />
					<Route path='/wynajem-samochodu' element={<SuspenseWithFooter children={<RentCar />} />} />
					<Route path='/artykuly-i-porady' element={<SuspenseWithFooter children={<ArticlesAndAdvices />} />} />
					<Route path='/artykuly-i-porady/:id' element={<SuspenseWithFooter children={<ArticlePage />} />} />
					<Route path='/polityka-prywatnosci' element={<SuspenseWithFooter children={<PrivacyPolicy />} />} />
					<Route path='*' element={<SuspenseWithFooter children={<PageNotFound />} />} />
				</Route>
			</Routes>
		</>
	);
};
