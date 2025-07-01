import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { supabase } from '../../../supabase/supabase';
import { useFormHandlers } from './useFormHandlers';
import {
	CarFormModel,
	ContactFormModel,
	LoginFormModel,
	RecoverPasswordFormModel,
	WorkFormModel,
} from '../../../models/forms.model';
import { FormTypes, UseFormSubmitsModel } from '../../../models/hooks.model';

export const useFormSubmits = <T extends FormTypes>({
	reset,
	refCaptcha,
	setIsLoading,
	setErrorValue,
	setButtonText,
}: UseFormSubmitsModel<T>) => {
	const navigate = useNavigate();

	const { handleUserActions, handleReCaptcha, handleEmailJs, handleErrors } = useFormHandlers({
		setIsLoading,
		setErrorValue,
	});

	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, subject, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const params = {
			firstname,
			email,
			subject,
			message,
			'g-recaptcha-response': token,
		};

		await handleEmailJs<T>({
			templateID: `${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
			params,
			setButtonText,
			reset,
		});
	};

	const workSubmit: SubmitHandler<WorkFormModel> = async ({ firstname, lastname, email, phone, city, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const params = {
			subject: 'rekrutacji',
			firstname,
			lastname,
			email,
			phone,
			city,
			message,
			'g-recaptcha-response': token,
		};

		await handleEmailJs<T>({ templateID: `${import.meta.env.VITE_SPECIAL_TEMPLATE_ID}`, params, setButtonText, reset });
	};

	const carSubmit: SubmitHandler<CarFormModel> = async ({ firstname, lastname, email, phone, city, car, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const params = {
			subject: 'wynajmu samochodu',
			firstname,
			lastname,
			email,
			phone,
			city,
			car,
			message,
			'g-recaptcha-response': token,
		};

		await handleEmailJs<T>({ templateID: `${import.meta.env.VITE_SPECIAL_TEMPLATE_ID}`, params, setButtonText, reset });
	};

	const loginSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		// const token = handleHCaptcha(refCaptcha);

		// if (!token) {
		// 	handleErrors();
		// 	return;
		// }

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
			// options: { captchaToken: token },
		});

		handleUserActions<T>({ error, reset, onSuccessActions: [() => navigate('/panel-uzytkownika')] });
	};

	const recoverPasswordSubmit: SubmitHandler<RecoverPasswordFormModel> = async ({ email }) => {
		// const token = handleHCaptcha(refCaptcha);

		// if (!token) {
		// 	handleErrors();
		// 	return;
		// }

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
			// captchaToken: token,
		});

		handleUserActions<T>({
			error,
			reset,
			onSuccessActions: [
				() => {
					setButtonText('Wysłane!');
					setTimeout(() => {
						setButtonText('Wyślij!');
						navigate('/logowanie');
					}, 2500);
				},
			],
		});
	};

	return { contactSubmit, workSubmit, carSubmit, loginSubmit, recoverPasswordSubmit };
};
