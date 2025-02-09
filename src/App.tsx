import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { WorkOffer, PrivacyPolicy, PageNotFound } from './subpages';

export const App: React.FC = () => {
	return (
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
					element={
						<>
							<Navbar />
							<Outlet />
						</>
					}>
					<Route
						path='/'
						element={
							<main>
								<Welcome />
								<Offer />
								<ChooseUs />
								<Blog />
								<BlogPopup />
								<Contact />
							</main>
						}
					/>
				</Route>
				<Route path='/oferta-pracy' element={<WorkOffer />} />
				<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};
