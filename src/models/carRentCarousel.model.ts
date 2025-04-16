export interface SlideDataModel {
	id: number;
	main_title: string;
	combustion: string;
	advantages: string;
	price: string;
}

export interface SlideModel {
	slide: SlideDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: SlideDataModel[];
}
