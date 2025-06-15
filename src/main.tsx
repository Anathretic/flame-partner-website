import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App.tsx';

import CarSelectProvider from './context/CarSelectContext.tsx';
import BlogPopupProvider from './context/BlogPopupContext.tsx';
import FooterLinksProvider from './context/FooterLinksContext.tsx';
import './sass/globals.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<CarSelectProvider>
					<BlogPopupProvider>
						<FooterLinksProvider>
							<App />
						</FooterLinksProvider>
					</BlogPopupProvider>
				</CarSelectProvider>
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>
);
