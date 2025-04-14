import { memo } from 'react';

import styles from './styles/styles.module.scss';

const ChooseUs: React.FC = () => {
	return (
		<section id='wybierz-nas' className={styles['choose-us']}>
			<div className={styles['choose-us__container']}>
				<div className={styles['choose-us__wrapper']}>
					<h2 className={styles['choose-us__title']}>Wybierz nas!</h2>
					<div className={styles['choose-us__box']}>
						<div className={styles['choose-us__box-item']}>
							<div className={styles['choose-us__box-item-image']} />
							<h3>1. Oficjalny partner</h3>
							<p>
								Jesteśmy oficjalnym partnerem popularnych na rynku firm, które umożliwiają pracę przez aplikacje mobilne
								takie jak Uber, Bolt, czy FreeNow. Z nami wszystko będzie jasne, a Ty będziesz mógł się skupić na swojej
								pracy.
							</p>
						</div>
						<div className={styles['choose-us__box-item']}>
							<div className={styles['choose-us__box-item-image']} />
							<h3>2. Księgowość</h3>
							<p>
								Doskonale znamy naszych klientów, dlatego gwarantujemy pełną obsługę rozliczeniową i księgową, gdzie
								wszystko będzie dla Ciebie jasne, a drobny druczek, czy gwiazdki nie istnieją.
							</p>
						</div>
						<div className={styles['choose-us__box-item']}>
							<div className={styles['choose-us__box-item-image']} />
							<h3>3. Profesjonalny zespół</h3>
							<p>
								Nasi pracownicy to profesjonaliści, którzy każdego dnia pogłębiają swoją wiedzę oraz badają aktualny
								rynek. Są na bieżąco z każdą nowością serwowaną branży transportu publicznego.
							</p>
						</div>
						<div className={styles['choose-us__box-item']}>
							<div className={styles['choose-us__box-item-image']} />
							<h3>4. Kilka form zatrudnienia</h3>
							<p>
								B2B? Umowa zlecenie? Możesz być spokojny, gdyż umowa, którą z nami podpiszesz będzie korzystna dla obu
								stron! Zależy nam, byś czerpał przyjemność z pokonywania kolejnych kilometrów.
							</p>
						</div>
						<div className={styles['choose-us__box-item']}>
							<div className={styles['choose-us__box-item-image']} />
							<h3>5. Obsługa w wielu językach</h3>
							<p>
								Nie bój się napisać! Nasz zespół jest wielojęzyczny i zapewnimy Ci odpowiedni komfort pracy, który
								będzie widoczny już od pierwszej rozmowy.
							</p>
						</div>
					</div>
				</div>
				<div
					className={`${styles['choose-us__special-decoration']} ${styles['choose-us__special-decoration--first']}`}
				/>
				<div
					className={`${styles['choose-us__special-decoration']} ${styles['choose-us__special-decoration--second']}`}
				/>
				<div
					className={`${styles['choose-us__special-decoration']} ${styles['choose-us__special-decoration--third']}`}
				/>
				<div
					className={`${styles['choose-us__special-decoration']} ${styles['choose-us__special-decoration--fourth']}`}
				/>
				<div
					className={`${styles['choose-us__special-decoration']} ${styles['choose-us__special-decoration--fifth']}`}
				/>
			</div>
			<div className={`${styles['choose-us__special-block']} ${styles['choose-us__special-block--left']}`} />
			<div className={`${styles['choose-us__special-block']} ${styles['choose-us__special-block--right']}`} />
		</section>
	);
};

export default memo(ChooseUs);
