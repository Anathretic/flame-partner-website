import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFooterLinksContext } from '../hooks/useFooterLinksContext';
import { scrollToTop } from '../utils/scrollToTopUtils';

import NotFoundImage from '../images/notfound-subpage/notfound-image.png';

const PageNotFound: React.FC = () => {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<section className='notfound'>
			<div className='notfound__container'>
				<img className='notfound__img' src={NotFoundImage} alt='Obrazek informujący o braku strony' />
				<h1 className='notfound__credits'>Ups! Strony nie znaleziono..</h1>
				<Link to='/' className='notfound__btn' onClick={scrollToTop} aria-label='Powrót na stronę główną'>
					Powrót
				</Link>
			</div>
			<div className='notfound__special-block notfound__special-block--left' />
			<div className='notfound__special-block notfound__special-block--right' />
		</section>
	);
};

export default PageNotFound;
