import { Route, Routes, Outlet } from 'react-router-dom';
import { Navbar, Footer, CookieBanner } from './components';
import { Welcome, Offer, ChooseUs, Contact } from './sections';
import { BoltWork, Blog, Prices, PrivacyPolicy, PageNotFound, UberWork, FreeNowWork } from './subpages';

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
							<>
								<Welcome />
								<Offer />
								<ChooseUs />
								<Contact />
							</>
						}
					/>
					<Route path='/praca-w-bolt' element={<BoltWork />} />
					<Route path='/praca-w-uber' element={<UberWork />} />
					<Route path='/praca-we-freenow' element={<FreeNowWork />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/cennik' element={<Prices />} />
				</Route>
				<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};
