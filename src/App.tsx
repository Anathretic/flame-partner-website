import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner, BlogPopup, HomeWrapper } from './components';
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
					<Route path='/rekrutacja' element={<Recruitment />} />
					<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</>
	);
};
