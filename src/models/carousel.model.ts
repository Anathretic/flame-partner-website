import { BlogAndArticleDataModel, RentCarDataModel } from './data.model';

export interface SlideModel {
	slide: RentCarDataModel | BlogAndArticleDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
	formRef?: React.RefObject<HTMLFormElement>;
}

export interface SliderModel {
	slides: RentCarDataModel[] | BlogAndArticleDataModel[];
	formRef?: React.RefObject<HTMLFormElement>;
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}

// -------- Hooks ---------

export interface CarouselOptionsModel {
	setCurrent: React.Dispatch<React.SetStateAction<number>>;
	current: number;
	slides: RentCarDataModel[] | BlogAndArticleDataModel[];
}

export interface SlideOptionsModel {
	slideRef: React.RefObject<HTMLLIElement>;
}

// ------------------------
