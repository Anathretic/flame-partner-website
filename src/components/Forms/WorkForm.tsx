import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	SelectElement,
	TextareaElement,
} from './components/FormElements';
import { workFormInputsConfig, workFormSelectsConfig } from './inputsConfig/inputsConfig';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { workSchema } from '../../schemas/schemas';
import { WorkFormModel } from '../../models/forms.model';

import styles from '../../subpages/Recruitment/styles/styles.module.scss';

const initialSubmitButtonState = 'Wyślij';

export const WorkForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<WorkFormModel>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			city: '',
			company: '',
			message: '',
		},
		resolver: yupResolver(workSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { workSubmit } = useFormSubmits<WorkFormModel>({
		reset,
		refCaptcha,
		setIsLoading,
		setErrorValue,
		setButtonText,
	});
	const workFormInputs = workFormInputsConfig(errors, register);
	const workFormSelects = workFormSelectsConfig(errors, register);

	return (
		<form className={styles['recruitment__work-form']} onSubmit={handleSubmit(workSubmit)}>
			{workFormInputs.map((input, id) => (
				<InputElement
					key={id}
					label={input.label}
					inputName={input.inputName}
					type={input.type}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					{...input.register}
				/>
			))}
			{workFormSelects.map((select, id) => (
				<SelectElement
					key={id}
					label={select.label}
					selectName={select.selectName}
					labelValueArr={select.labelValueArr}
					errorMessage={select.errorMessage}
					aria-invalid={select.isInvalid}
					{...select.register}
				/>
			))}
			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<ReCaptchaV2Component refCaptcha={refCaptcha} errorValue={errorValue} />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
			<ReturnButton isLoading={isLoading} />
		</form>
	);
};
