import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	SelectElement,
	TextareaElement,
} from './components/FormElements';
import { workFormInputsConfig, workFormSelectsConfig } from './inputsConfig/inputsConfig';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { workSchema } from '../../schemas/schemas';
import { WorkFormModel } from '../../models/forms.model';

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
	const workFormInputs = workFormInputsConfig(errors, register);
	const workFormSelects = workFormSelectsConfig(errors, register);

	const onSubmit: SubmitHandler<WorkFormModel> = async ({
		firstname,
		lastname,
		email,
		phone,
		city,
		company,
		message,
	}) => {
		setIsLoading(true);
		setErrorValue('');

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			lastname,
			email,
			phone,
			city,
			company,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					setButtonText('Wysłane!');
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	return (
		<form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
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
		</form>
	);
};
