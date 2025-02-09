import { createContext, useState } from 'react';
import { BlogPopupContextModel, SlideDataModel } from '../models/blogCarousel.model';

export const BlogPopupContext = createContext<BlogPopupContextModel | null>(null);

const BlogPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [showPopup, setShowPopup] = useState(false);
	const [slideItemData, setSlideItemData] = useState<SlideDataModel | undefined>(undefined);

	const togglePopupVisibility = () => {
		setShowPopup(!showPopup);
	};

	return (
		<BlogPopupContext.Provider value={{ showPopup, togglePopupVisibility, slideItemData, setSlideItemData }}>
			{children}
		</BlogPopupContext.Provider>
	);
};

export default BlogPopupProvider;
