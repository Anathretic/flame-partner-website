import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSubmitFormButton } from '../../hooks/formHooks/useSubmitFormButton';
import { useFormSubmits } from '../../hooks/formHooks/useForm/useFormSubmits';
import { loginFormInputs } from './config/formConfig';
import { GenericForm } from './GenericForm/GenericForm';
import { loginSchema } from '../../schemas/schemas';
import { LoginFormModel } from '../../models/forms.model';

import styles from '../../subpages/Admin/Login/styles/styles.module.scss';

export const LoginForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState: 'Zaloguj' });
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormModel>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);

	const { loginSubmit } = useFormSubmits<LoginFormModel>({
		reset,
		setIsLoading,
		setErrorValue,
		setButtonText,
		refCaptcha,
	});

	return (
		<>
			<GenericForm<LoginFormModel>
				register={register}
				handleSubmit={handleSubmit}
				onSubmit={loginSubmit}
				inputs={loginFormInputs}
				cssClass={styles.login__form}
				buttonText={buttonText}
				isLoading={isLoading}
				errors={errors}
				refCaptcha={refCaptcha}
				errorValue={errorValue}
				includeTextarea={false}
				includeReturnButton={false}
			/>
			<div className={styles['login__password-recover-box']}>
				<Link to='/admin/odzyskiwanie-hasla' className={styles['login__password-recover-btn']}>
					Nie pamiętasz hasła?
				</Link>
			</div>
		</>
	);
};
