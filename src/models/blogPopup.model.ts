import { BlogSlideDataModel } from './carousel.model';

export interface BlogPopupContextModel {
	showPopup: boolean;
	togglePopupVisibility: () => void;
	slideItemData: BlogSlideDataModel | undefined;
	setSlideItemData: React.Dispatch<React.SetStateAction<BlogSlideDataModel | undefined>>;
}

export interface GetBlogDataModel {
	setSlides: React.Dispatch<React.SetStateAction<BlogSlideDataModel[]>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}
