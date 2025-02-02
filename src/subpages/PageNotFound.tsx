import { Link } from 'react-router-dom';
import NotFoundImage from '../images/notfound-subpage/notfound-image.png';

const PageNotFound: React.FC = () => {
	return (
		<section>
			<div className='notfound'>
				<img className='notfound__img' src={NotFoundImage} alt='Page not found image' />
				<p className='notfound__credits'>Ups! Strony nie znaleziono..</p>
				<Link to='/' className='notfound__btn'>
					Powrót
				</Link>
			</div>
		</section>
	);
};

export default PageNotFound;
