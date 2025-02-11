import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup } from './components';
import { Welcome, Offer, ChooseUs, Blog, Contact } from './sections';
import { Recruitment, PrivacyPolicy, PageNotFound } from './subpages';

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
							<main>
								<Outlet />
							</main>
						</>
					}>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<Offer />
								<ChooseUs />
								<Blog />
								<BlogPopup />
								<Contact />
							</>
						}
					/>
				</Route>
				<Route path='/rekrutacja' element={<Recruitment />} />
				<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};
