interface SlideTextDataModel {
	id: number;
	title: string;
	content: string;
}

export interface SlideDataModel {
	id: number;
	main_title: string;
	public_date: string;
	text_array: SlideTextDataModel[];
}

export interface SlideModel {
	slide: SlideDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: SlideDataModel[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}

export interface BlogPopupContextModel {
	showPopup: boolean;
	togglePopupVisibility: () => void;
	slideItemData: SlideDataModel | undefined;
	setSlideItemData: React.Dispatch<React.SetStateAction<SlideDataModel | undefined>>;
}
