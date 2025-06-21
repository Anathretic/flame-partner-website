import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { useFooterLinksContext } from '../../hooks/contextHooks/useFooterLinksContext';
import { footerHomeItems, footerMoreItems, footerOfferItems } from './footerItems/footerItems';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FaRegCopyright, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

import FooterLogo from '../../images/logo-images/footer-logo.png';

import styles from './styles/styles.module.scss';

const Footer: React.FC = () => {
	const { showSpecialLinks } = useFooterLinksContext();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
	const currentYear = new Date().getFullYear();

	const memoizedFooterHomeItems = useMemo(() => footerHomeItems, []);
	const memoizedFooterOfferItems = useMemo(() => footerOfferItems, []);
	const memoizedFooterMoreItems = useMemo(() => footerMoreItems, []);

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__wrapper}>
					<div className={styles.footer__box}>
						<h2>
							<img src={FooterLogo} alt='' />
						</h2>
						<p>Pomoc i wsparcie na każdym etapie!</p>
						<div className={styles['footer__icons-box']}>
							<a href='https://www.facebook.com/profile.php?id=61574789965056' target='_blank' rel='noreferrer'>
								<FaFacebookSquare fontSize={isMobile ? 24 : 28} />
							</a>
							<a href='https://www.instagram.com/flame.partner' target='_blank' rel='noreferrer'>
								<FaInstagram fontSize={isMobile ? 24 : 28} />
							</a>
							<a href='https://www.tiktok.com/@flame.partner' target='_blank' rel='noreferrer'>
								<AiFillTikTok fontSize={isMobile ? 24 : 28} />
							</a>
						</div>
					</div>
					<div className={styles.footer__box}>
						{!showSpecialLinks && (
							<>
								<h3>Home</h3>
								<ul>
									{memoizedFooterHomeItems.map((item, id) => (
										<li key={id}>
											<HashLink smooth to={item.to}>
												{item.content}
											</HashLink>
										</li>
									))}
								</ul>
							</>
						)}
					</div>
					<div className={styles.footer__box}>
						<h3>Oferta</h3>
						<ul>
							{memoizedFooterOfferItems.map((item, id) => (
								<li key={id}>
									<Link to={item.to} onClick={scrollToTop}>
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.footer__box}>
						<h3>Więcej</h3>
						<ul>
							{memoizedFooterMoreItems.map((item, id) => (
								<li key={id}>
									<Link to={item.to} onClick={scrollToTop}>
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles['footer__copyright-box']}>
				<FaRegCopyright className={styles['footer__copyright-icon']} />
				<p className={styles['footer__copyright-company-name']}> {currentYear} flame partner</p>
			</div>
		</footer>
	);
};

export default Footer;
