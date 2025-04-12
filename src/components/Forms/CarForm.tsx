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
import { carFormInputsConfig, carFormSelectsConfig } from './inputsConfig/inputsConfig';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { carSchema } from '../../schemas/schemas';
import { CarFormModel } from '../../models/forms.model';

const initialSubmitButtonState = 'Wyślij';

export const CarForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CarFormModel>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			car: '',
			message: '',
		},
		resolver: yupResolver(carSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { carSubmit } = useFormSubmits<CarFormModel>({
		reset,
		refCaptcha,
		setIsLoading,
		setErrorValue,
		setButtonText,
	});
	const carFormInputs = carFormInputsConfig(errors, register);
	const carFormSelects = carFormSelectsConfig(errors, register);

	return (
		<form className='rent-car__car-form' onSubmit={handleSubmit(carSubmit)}>
			{carFormInputs.map((input, id) => (
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
			{carFormSelects.map((select, id) => (
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
