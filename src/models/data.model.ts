interface BlogAndArticleSectionDataModel {
	title: string;
	content: string;
}

export interface BlogAndArticleDataModel {
	id: number;
	main_title: string;
	public_date: string;
	text: string;
	specialText: string;
	href: string;
	image: string;
	sections: BlogAndArticleSectionDataModel[];
}

export interface RentCarDataModel {
	id: number;
	main_title: string;
	combustion: string;
	advantages: string;
	price: string;
}

export interface GetBlogAndArticleDataModel {
	setSlides: React.Dispatch<React.SetStateAction<BlogAndArticleDataModel[]>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}
