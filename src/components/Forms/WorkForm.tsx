import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { workFormInputs, workFormSelects } from './config/formConfig';
import { GenericForm } from './GenericForm/GenericForm';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/useSubmitFormButton';
import { workSchema } from '../../schemas/schemas';
import { WorkFormModel } from '../../models/forms.model';

import styles from '../../subpages/Recruitment/styles/styles.module.scss';

export const WorkForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState: 'Wyślij' });

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

	return (
		<GenericForm<WorkFormModel>
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={workSubmit}
			inputs={workFormInputs}
			selects={workFormSelects}
			cssClass={styles['recruitment__work-form']}
			buttonText={buttonText}
			isLoading={isLoading}
			errors={errors}
			refCaptcha={refCaptcha}
			errorValue={errorValue}
			includeReturnButton={true}
		/>
	);
};
