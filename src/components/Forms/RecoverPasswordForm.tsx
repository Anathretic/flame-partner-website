import { useRef, useState } from 'react';
import { useSubmitFormButton } from '../../hooks/formHooks/useSubmitFormButton';
import { RecoverPasswordFormModel } from '../../models/forms.model';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { recoverPasswordSchema } from '../../schemas/schemas';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormSubmits } from '../../hooks/formHooks/useForm/useFormSubmits';
import { GenericForm } from './GenericForm/GenericForm';
import { recoverPasswordFormInputs } from './config/formConfig';

import styles from '../../subpages/Admin/RecoverPassword/styles/styles.module.scss';

export const RecoverPasswordForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState: 'Wyślij' });
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RecoverPasswordFormModel>({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(recoverPasswordSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);

	const { recoverPasswordSubmit } = useFormSubmits<RecoverPasswordFormModel>({
		reset,
		setIsLoading,
		setErrorValue,
		setButtonText,
		refCaptcha,
	});

	return (
		<GenericForm<RecoverPasswordFormModel>
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={recoverPasswordSubmit}
			inputs={recoverPasswordFormInputs}
			cssClass={styles['recover-password__form']}
			buttonText={buttonText}
			isLoading={isLoading}
			errors={errors}
			refCaptcha={refCaptcha}
			errorValue={errorValue}
			includeTextarea={false}
			includeReturnButton={false}
		/>
	);
};
