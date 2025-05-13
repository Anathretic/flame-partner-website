import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://flamepartner.pl/' });
const writeStream = createWriteStream('public/sitemap.xml');

const urls = [
	{ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2025-05-13' },
	{ url: '/rekrutacja-kierowcow', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-13' },
	{ url: '/wynajem-samochodu', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-13' },
	{ url: '/polityka-prywatnosci', changefreq: 'yearly', priority: 0.3, lastmod: '2025-05-13' },
];

sitemap.pipe(writeStream);
urls.forEach(urlEntry => sitemap.write(urlEntry));
sitemap.end();

streamToPromise(sitemap)
	.then(() => {
		console.log('Sitemap generated!');
	})
	.catch(err => {
		console.error('An error occurred:', err);
	});
