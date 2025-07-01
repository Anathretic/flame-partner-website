import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RecoverPasswordForm } from '../../../components/Forms/RecoverPasswordForm';

import styles from './styles/styles.module.scss';

const RecoverPassword: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Odzyskiwanie hasła | Flame Partner | Administrator</title>
				<meta
					name='description'
					content='Zresetuj hasło do konta administratora Flame Partner i odzyskaj dostęp do panelu.'
				/>
				<meta property='og:title' content='Odzyskiwanie hasła | Flame Partner | Administrator' />
				<meta property='og:description' content='Formularz odzyskiwania hasła do konta administratora.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/admin/odzyskiwanie-hasla' />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main className={styles.main}>
				<section className={styles['recover-password']}>
					<div className={styles['recover-password__container']}>
						<h1 className={styles['recover-password__title']}>Odzyskaj hasło</h1>
						<hr className={styles['recover-password__strap']} />
						<RecoverPasswordForm />
						<hr className={styles['recover-password__strap']} />
						<div className={styles['recover-password__form-toggle']}>
							<p>A jeśli sobie przypomniałeś..</p>
							<Link to='/admin/logowanie'>Powrót</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default RecoverPassword;
