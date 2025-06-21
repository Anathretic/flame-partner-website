import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://flamepartner.pl/' });
const writeStream = createWriteStream('public/sitemap.xml');

const urls = [
	{ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2025-06-21' },
	{ url: '/rekrutacja-kierowcow', changefreq: 'monthly', priority: 0.8, lastmod: '2025-06-21' },
	{ url: '/wynajem-samochodu', changefreq: 'monthly', priority: 0.8, lastmod: '2025-06-21' },
	{ url: '/artykuly-i-porady', changefreq: 'monthly', priority: 0.7, lastmod: '2025-06-21' },
	{
		url: '/artykuly-i-porady/jak-zostac-kierowca-bolt-uber-lub-freenow',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: '2025-06-17',
	},
	{
		url: '/artykuly-i-porady/dlaczego-warto-pracowac-jako-kierowca',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: '2025-06-17',
	},
	{
		url: '/artykuly-i-porady/jak-dbac-o-bezpieczenstwo-i-komfort-pracy',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: '2025-06-17',
	},
	{
		url: '/artykuly-i-porady/ile-mozna-zarobic-jako-kierowca',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: '2025-06-17',
	},
	{
		url: '/artykuly-i-porady/jak-wyglada-dzien-pracy-kierowcy-w-aplikacji',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: '2025-06-17',
	},
	{ url: '/polityka-prywatnosci', changefreq: 'yearly', priority: 0.3, lastmod: '2025-06-17' },
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
