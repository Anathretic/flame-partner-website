import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import {
	InputAndTextareaModel,
	ReCaptchaV2Model,
	ReturnButtonModel,
	SelectModel,
	SubmitButtonModel,
} from '../../../models/formElements.model';
import { Loader } from '../../Loader/Loader';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, errorMessage, ...props }, ref) => {
		return (
			<div className={styles.form__box}>
				<label className={styles.form__label} htmlFor={inputName}>
					{label}
				</label>
				<input
					className={styles.form__input}
					type={type}
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className={styles['form__input-error']}>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
	return (
		<div className={styles.form__box}>
			<label className={styles.form__label} htmlFor={inputName}>
				{label}
			</label>
			<textarea
				className={styles.form__textarea}
				id='message'
				placeholder={placeholder}
				autoComplete='off'
				ref={ref}
				{...props}></textarea>
			<p className={styles['form__textarea-error']}>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

export const SelectElement: React.FC<SelectModel> = React.forwardRef<HTMLSelectElement, SelectModel>(
	({ label, selectName, labelValueArr, errorMessage, ...props }, ref) => {
		return (
			<div className={styles.form__box}>
				<label className={styles.form__label} htmlFor={selectName}>
					{label}
				</label>
				<select className={styles.form__select} ref={ref} id={selectName} autoComplete='off' {...props}>
					{labelValueArr.map((option, id) => (
						<option key={id} disabled={option.disabled} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<p className={styles['form__select-error']}>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const FormSubmit: React.FC<SubmitButtonModel> = ({ isLoading, buttonText }) => {
	return (
		<div className={styles.form__box}>
			{isLoading ? <Loader /> : <input className={styles.form__submit} type='submit' value={buttonText} />}
		</div>
	);
};

export const ReturnButton: React.FC<ReturnButtonModel> = ({ isLoading }) => {
	return (
		<div className={styles.form__box}>
			<Link
				className={`${styles['form__return-btn']} ${isLoading && styles['form__return-btn--opacity']}`}
				to='/'
				onClick={scrollToTop}>
				Powrót
			</Link>
		</div>
	);
};

export const ReCaptchaV2Component: React.FC<ReCaptchaV2Model> = ({ refCaptcha, errorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className={`${styles['form__recaptcha-box']} ${errorValue && styles['form__recaptcha-error']}`}>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
		</div>
	);
};
