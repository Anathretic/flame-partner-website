import { Car } from './forms.model';

interface BlogSlideTextDataModel {
	title: string;
	content: string;
}

export interface RentCarSlideDataModel {
	id: number;
	main_title: string;
	combustion: string;
	advantages: string;
	price: string;
}

export interface BlogSlideDataModel {
	id: number;
	main_title: string;
	public_date: string;
	sections: BlogSlideTextDataModel[];
}

export interface SlideModel {
	slide: RentCarSlideDataModel | BlogSlideDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
	formRef: React.RefObject<HTMLFormElement>;
}

export interface SliderModel {
	slides: RentCarSlideDataModel[] | BlogSlideDataModel[];
	formRef: React.RefObject<HTMLFormElement>;
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
	slides: RentCarSlideDataModel[] | BlogSlideDataModel[];
}

export interface SlideOptionsModel {
	slideRef: React.RefObject<HTMLLIElement>;
}

// ------------------------

// ------- Context --------

export interface CarSelectContextModel {
	selectedCar: Car;
	setSelectedCar: React.Dispatch<React.SetStateAction<Car>>;
}

// ------------------------
