import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { carFormInputs, carFormSelects } from './config/formConfig';
import { GenericForm } from './GenericForm/GenericForm';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { useCarSelectContext } from '../../hooks/useCarSelectContext';
import { carSchema } from '../../schemas/schemas';
import { CarFormModel } from '../../models/forms.model';
import { RentCarFormRefModel } from '../../models/rentCar.model';

import styles from '../../subpages/RentCar/styles/styles.module.scss';

export const CarForm: React.FC<RentCarFormRefModel> = ({ formRef }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState: 'Wyślij' });

	const { selectedCar } = useCarSelectContext();

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<CarFormModel>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			city: '',
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

	useEffect(() => {
		if (selectedCar) setValue('car', selectedCar);
	}, [selectedCar]);

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
			formRef={formRef}
		/>
	);
};
