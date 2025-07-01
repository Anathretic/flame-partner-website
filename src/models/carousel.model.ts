import { BlogAndArticleDataModel, RentCarDataModel } from './data.model';

export interface SlideModel {
	slide: RentCarDataModel | BlogAndArticleDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
	formRef?: React.RefObject<HTMLFormElement>;
}

export interface CarouselModel {
	slides: RentCarDataModel[] | BlogAndArticleDataModel[];
	formRef?: React.RefObject<HTMLFormElement>;
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}
