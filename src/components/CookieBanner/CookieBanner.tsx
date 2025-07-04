import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

const CookieBanner: React.FC = ({ ...otherProps }) => {
	return (
		<CookieConsent
			buttonId='cookie-btn'
			location='bottom'
			buttonText='OK'
			style={{
				color: '#fff',
				backgroundColor: '#19323f',
				fontSize: '12px',
				padding: '10px',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			buttonStyle={{
				backgroundColor: '#ffdf00',
				fontSize: '14px',
				padding: '10px',
				width: '100px',
				borderRadius: '8px',
			}}
			expires={1}
			{...otherProps}>
			<p className={styles['cookie-banner-text']}>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z
				naszej{' '}
				<Link to='/polityka-prywatnosci' className={styles['cookie-banner-link']} onClick={scrollToTop}>
					polityki prywatności
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
