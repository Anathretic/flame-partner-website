import { Route, Routes, Outlet } from 'react-router-dom';
import { Header, Footer, CookieBar } from './components';
import { Welcome, Offer, ChooseUs, Contact } from './sections';
import { BoltWork, Blog, Prices, PrivacyPolicy, PageNotFound } from './subpages';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route
				element={
					<>
						<Header />
						<Outlet />
						<Footer />
						<CookieBar />
					</>
				}>
				<Route
					path='/'
					element={
						<>
							<Welcome />
							<Offer />
							<ChooseUs />
							<Contact />
						</>
					}
				/>
				<Route path='/praca-w-bolt' element={<BoltWork />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/cennik' element={<Prices />} />
				<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};
