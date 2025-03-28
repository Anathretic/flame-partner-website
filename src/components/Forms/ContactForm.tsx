import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement, ReCaptchaV2Component, TextareaElement } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { contactSchema } from '../../schemas/schemas';
import { ContactFormModel } from '../../models/forms.model';

const initialSubmitButtonState = 'Wyślij';

export const ContactForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: {
			firstname: '',
			email: '',
			subject: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { contactSubmit } = useFormSubmits<ContactFormModel>({
		reset,
		refCaptcha,
		setIsLoading,
		setErrorValue,
		setButtonText,
	});
	const contactFormInputs = contactFormInputsConfig(errors, register);

	return (
		<form className='contact__form' onSubmit={handleSubmit(contactSubmit)}>
			{contactFormInputs.map((input, id) => (
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
