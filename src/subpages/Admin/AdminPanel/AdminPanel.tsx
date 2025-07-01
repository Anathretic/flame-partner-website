import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';

import styles from './styles/styles.module.scss';

const AdminPanel: React.FC = () => {
	const { checkUserStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkUserStatus();
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Panel administratora | Flame Partner | Administrator</title>
				<meta name='description' content='Zarządzaj stroną Flame Partner za pomocą odpowiedniego panelu.' />
				<meta property='og:title' content='Panel administratora | Flame Partner | Administrator' />
				<meta property='og:description' content='Dostęp do zarządzania stroną Flame Partner.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flamepartner.pl/admin' />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main className={styles.main}>
				<div>AdminPanel</div>
			</main>
		</>
	);
};

export default AdminPanel;
