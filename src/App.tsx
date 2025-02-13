import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { Recruitment, PrivacyPolicy, PageNotFound } from './subpages';

export const App: React.FC = () => {
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
								<main>
									<Welcome />
									<Offer />
									<ChooseUs />
									<Blog />
									<BlogPopup />
									<Contact />
								</main>
							</>
						}
					/>
					<Route path='/rekrutacja' element={<Recruitment />} />
					<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	);
};
