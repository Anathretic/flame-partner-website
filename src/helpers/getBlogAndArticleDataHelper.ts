import { supabase } from '../supabase/supabase';
import { GetBlogAndArticleDataModel } from '../models/data.model';

export const getBlogAndArticleData = async ({
	setSlides,
	setIsLoading,
	setError,
}: GetBlogAndArticleDataModel): Promise<void> => {
	const cachedData = localStorage.getItem('blogData');
	const cachedTimestamp = localStorage.getItem('blogDataTimestamp');
	const cacheExpiry = 60 * 30 * 1000;

	if (cachedData && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < cacheExpiry) {
		setSlides(JSON.parse(cachedData));
		setIsLoading(false);
		return;
	}

	try {
		const { data, error } = await supabase
			.from(import.meta.env.VITE_ARRAY_NAME)
			.select('id, main_title, text, specialText, href, image, public_date, sections(title, content)')
			.order('public_date', { ascending: true });

		if (error) {
			setError(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
			throw new Error('Wystąpił nieoczekiwany błąd.. Spróbuj ponownie..');
		}

		const sortedData = data.map(item => ({
			...item,
			sections: item.sections ? [...item.sections].sort((a, b) => a.title.localeCompare(b.title)) : [],
		}));

		setSlides(sortedData);

		localStorage.setItem('blogData', JSON.stringify(sortedData));
		localStorage.setItem('blogDataTimestamp', Date.now().toString());

		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	} catch (err) {
		if (err instanceof Error) {
			console.error('Błąd pobierania danych: ', err);
			setError(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}
};
