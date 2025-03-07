import { lazy } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup, HomeWrapper, SuspenseWithFooter } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { delaySubpageImport } from './helpers/delaySubpageImport';

const Recruitment = lazy(() => delaySubpageImport(() => import('./subpages/Recruitment/Recruitment'), 1000));
const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('./subpages/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('./subpages/PageNotFound'), 1000));

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
									<BlogPopup />
									<Contact />
								</HomeWrapper>
								<Footer />
							</>
						}
					/>
					<Route path='/rekrutacja' element={<SuspenseWithFooter children={<Recruitment />} />} />
					<Route path='/polityka-prywatnosci' element={<SuspenseWithFooter children={<PrivacyPolicy />} />} />
					<Route path='*' element={<SuspenseWithFooter children={<PageNotFound />} />} />
				</Route>
			</Routes>
		</>
	);
};
