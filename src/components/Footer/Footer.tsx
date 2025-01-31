import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { footerMoreItems, footerHomeItems, footerWorkItems } from './footerItems/footerItems';
import { FaRegCopyright, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__wrapper'>
					<div className='footer__box'>
						<h3>flame</h3>
						<p>Pomoc i wspracie na każdym etapie..</p>
						<div>
							<a
								href='https://www.facebook.com/people/Flame-Partner-BoltUberFreeNow/61570176986872/'
								target='_blank'
								rel='noreferrer'>
								<FaFacebookSquare fontSize={isMobile ? 20 : 25} />
							</a>
							<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
								<FaInstagram fontSize={isMobile ? 20 : 25} />
							</a>
							<a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
								<FaLinkedin fontSize={isMobile ? 20 : 25} />
							</a>
						</div>
					</div>
					<div className='footer__box'>
						<h3>Home</h3>
						<ul>
							{footerHomeItems.map((item, id) => (
								<li key={id}>
									<HashLink to={item.to}>{item.content}</HashLink>
								</li>
							))}
						</ul>
					</div>
					<div className='footer__box'>
						<h3>Praca</h3>
						<ul>
							{footerWorkItems.map((item, id) => (
								<li key={id}>
									<Link to={item.to} onClick={item.onClick}>
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='footer__box'>
						<h3>Więcej</h3>
						<ul>
							{footerMoreItems.map((item, id) => (
								<li key={id}>
									<Link to={item.to} onClick={item.onClick}>
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className='footer__copyright-box'>
				<FaRegCopyright className='footer__copyright-icon' />
				<p className='footer__copyright-company-name'> {currentYear} flame partner</p>
			</div>
		</footer>
	);
};

export default Footer;
