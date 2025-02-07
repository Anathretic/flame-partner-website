import { useEffect, useState } from 'react';
import { BlogCarousel } from '../components/Blog/BlogCarousel';
import { SlideDataModel } from '../models/blogCarousel.model';

const Blog: React.FC = () => {
	const [slides, setSlides] = useState<SlideDataModel[]>([]);
	const getSlideData = async () => {
		const url = `${import.meta.env.VITE_BLOG_DATA_URL}`;

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			setSlides(json);
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	useEffect(() => {
		getSlideData();
	}, []);

	return (
		<section id='blog' className='blog'>
			<div className='blog__container'>
				<div className='blog__wrapper'>
					<h2 className='blog__title'>Blog</h2>
					{slides.length > 0 && <BlogCarousel slides={slides} />}
				</div>
			</div>
			<div className='blog__special-block blog__special-block--left' />
			<div className='blog__special-block blog__special-block--right' />
		</section>
	);
};

export default Blog;
