import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { footerHomeItems } from './footerItems/footerItems';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FaRegCopyright, FaFacebookSquare } from 'react-icons/fa';
import FooterLogo from '../../images/logo-images/footer-logo.png';
import { useFooterLinksContext } from '../../hooks/useFooterLinksContext';

const Footer: React.FC = () => {
	const { showSpecialLinks } = useFooterLinksContext();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__wrapper'>
					<div className='footer__box'>
						<h2>
							<img src={FooterLogo} alt='' />
						</h2>
						<p>Pomoc i wspracie na każdym etapie..</p>
						<div>
							<a
								href='https://www.facebook.com/people/Flame-Partner-BoltUberFreeNow/61570176986872/'
								target='_blank'
								rel='noreferrer'>
								<FaFacebookSquare fontSize={isMobile ? 20 : 25} />
							</a>
						</div>
					</div>
					<div className='footer__box'>
						<h3>Home</h3>
						<ul>
							{!showSpecialLinks ? (
								<>
									{footerHomeItems.map((item, id) => (
										<li key={id}>
											<HashLink smooth to={item.to} onClick={scrollToTop}>
												{item.content}
											</HashLink>
										</li>
									))}
								</>
							) : (
								<li>
									<Link to='/' onClick={scrollToTop}>
										Strona główna
									</Link>
								</li>
							)}
						</ul>
					</div>
					<div className='footer__box'>
						<h3>Praca</h3>
						<ul>
							<li>
								<Link to='/rekrutacja' onClick={scrollToTop}>
									Rekrutacja
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer__box'>
						<h3>Więcej</h3>
						<ul>
							{!showSpecialLinks && (
								<li>
									<HashLink smooth to='/#blog' onClick={scrollToTop}>
										Blog
									</HashLink>
								</li>
							)}
							<li>
								<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
									Polityka prywatności
								</Link>
							</li>
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
