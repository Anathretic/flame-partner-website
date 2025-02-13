import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';

import BlogPopupProvider from './context/BlogPopupContext.tsx';
import './sass/main.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<BlogPopupProvider>
				<App />
			</BlogPopupProvider>
		</BrowserRouter>
	</StrictMode>
);
