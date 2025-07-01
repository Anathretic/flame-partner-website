import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../../components/Forms/LoginForm';

import styles from './styles/styles.module.scss';

const Login: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Logowanie | Flame Partner | Administrator</title>
				<meta name='description' content='Zaloguj się jako administrator Flame Partner, aby zarządzać stroną.' />
				<meta property='og:title' content='Logowanie administratora | Flame Partner' />
				<meta property='og:description' content='Panel logowania dla administratorów strony Flame Partner.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/admin/logowanie' />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main className={styles.main}>
				<section className={styles.login}>
					<div className={styles.login__container}>
						<h1 className={styles.login__title}>Logowanie</h1>
						<hr className={styles.login__strap} />
						<LoginForm />
					</div>
				</section>
			</main>
		</>
	);
};

export default Login;
