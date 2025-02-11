import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import {
	InputAndTextareaModel,
	ReCaptchaV2Model,
	SelectModel,
	SubmitButtonModel,
} from '../../../models/formElements.model';
import { Loader } from '../../Loader';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, errorMessage, ...props }, ref) => {
		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={inputName}>
					{label}
				</label>
				<input
					className='form__input'
					type={type}
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className='form__input-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
	return (
		<div className='form__box'>
			<label className='form__label' htmlFor={inputName}>
				{label}
			</label>
			<textarea
				className='form__textarea'
				id='message'
				placeholder={placeholder}
				autoComplete='off'
				ref={ref}
				{...props}></textarea>
			<p className='form__textarea-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

export const SelectElement: React.FC<SelectModel> = React.forwardRef<HTMLSelectElement, SelectModel>(
	({ label, selectName, labelValueArr, errorMessage, ...props }, ref) => {
		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={selectName}>
					{label}
				</label>
				<select className='form__select' ref={ref} {...props}>
					{labelValueArr.map((option, id) => (
						<option key={id} disabled={option.disabled} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<p className='form__select-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const FormSubmit: React.FC<SubmitButtonModel> = ({ isLoading, buttonText }) => {
	return (
		<div className='form__box'>
			{isLoading ? <Loader className='loader' /> : <input className='form__submit' type='submit' value={buttonText} />}
		</div>
	);
};

export const ReCaptchaV2Component: React.FC<ReCaptchaV2Model> = ({ refCaptcha, errorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className='form__recaptcha-box'>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form__recaptcha-error'>
				<p>{errorValue}</p>
			</div>
		</div>
	);
};
