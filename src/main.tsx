import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App.tsx';

import NavbarItemsProvider from './context/NavbarItemsContext.tsx';
import FooterLinksProvider from './context/FooterLinksContext.tsx';
import CarSelectProvider from './context/CarSelectContext.tsx';

import './sass/globals.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<NavbarItemsProvider>
					<FooterLinksProvider>
						<CarSelectProvider>
							<App />
						</CarSelectProvider>
					</FooterLinksProvider>
				</NavbarItemsProvider>
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>
);
