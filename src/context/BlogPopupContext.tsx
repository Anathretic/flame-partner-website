import { createContext, useState } from 'react';
import { BlogPopupContextModel } from '../models/blogPopup.model';
import { BlogSlideDataModel } from '../models/carousel.model';

export const BlogPopupContext = createContext<BlogPopupContextModel | null>(null);

const BlogPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [showPopup, setShowPopup] = useState(false);
	const [slideItemData, setSlideItemData] = useState<BlogSlideDataModel | undefined>(undefined);

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
