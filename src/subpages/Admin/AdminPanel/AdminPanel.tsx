import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../../supabase/supabase';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';

import styles from './styles/styles.module.scss';

const AdminPanel: React.FC = () => {
	const navigate = useNavigate();

	const { checkUserStatus } = useCheckSessionStatus();

	const logout = async () => {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			navigate('/admin/logowanie');
		} else {
			console.error('Błąd podczas wylogowywania: ', error.message);
		}
	};

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
				<div>
					<h1>AdminPanel</h1>
					<button type='button' onClick={logout}>
						Wyloguj
					</button>
				</div>
			</main>
		</>
	);
};

export default AdminPanel;
