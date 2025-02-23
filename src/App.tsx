import { lazy, Suspense } from 'react';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup, HomeWrapper } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { SubpageLoader } from './components/Loader';
import { delaySubpageImport } from './helpers/delaySubpageImport';

const Recruitment = lazy(() => delaySubpageImport(() => import('./subpages/Recruitment/Recruitment'), 1000));
const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('./subpages/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('./subpages/PageNotFound'), 1000));

export const App: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<Routes>
				<Route
					element={
						<>
							<Outlet />
							<Footer />
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
							</>
						}
					/>
					<Route
						path='/rekrutacja'
						element={
							<Suspense key={location.pathname} fallback={<SubpageLoader />}>
								<Recruitment />
							</Suspense>
						}
					/>
					<Route
						path='/polityka-prywatnosci'
						element={
							<Suspense key={location.pathname} fallback={<SubpageLoader />}>
								<PrivacyPolicy />
							</Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<Suspense key={location.pathname} fallback={<SubpageLoader />}>
								<PageNotFound />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
