import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { carFormInputs, carFormSelects } from './inputsConfig/inputsConfig';
import { GenericForm } from './GenericForm/GenericForm';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { carSchema } from '../../schemas/schemas';
import { CarFormModel } from '../../models/forms.model';

import styles from '../../subpages/RentCar/styles/styles.module.scss';

export const CarForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useState('Wyślij');

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
			city: '',
			company: '',
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

	return (
		<GenericForm<CarFormModel>
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={carSubmit}
			inputs={carFormInputs}
			selects={carFormSelects}
			cssClass={styles['rent-car__car-form']}
			buttonText={buttonText}
			isLoading={isLoading}
			errors={errors}
			refCaptcha={refCaptcha}
			errorValue={errorValue}
			includeReturnButton={true}
		/>
	);
};
