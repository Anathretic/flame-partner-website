import { useEffect, useState } from 'react';
import { getBlogAndArticleData } from '../helpers/getBlogAndArticleDataHelper';
import { BlogAndArticleDataModel } from '../models/data.model';

export const useBlogAndArticleData = () => {
	const [slides, setSlides] = useState<BlogAndArticleDataModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (isLoading) getBlogAndArticleData({ setSlides, setIsLoading, setError });
	}, [isLoading]);

	return { slides, isLoading, error, setIsLoading, setError };
};
