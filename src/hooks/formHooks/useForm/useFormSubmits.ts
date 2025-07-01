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

	const { handleUserActions, handleHCaptcha, handleFormcarry, handleErrors } = useFormHandlers({
		setIsLoading,
		setErrorValue,
	});

	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, subject, message }) => {
		const token = handleHCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const formData = {
			firstname,
			email,
			subject,
			message,
			'h-captcha-response': token,
		};

		await handleFormcarry<ContactFormModel>({
			formData,
			reset,
			setButtonText,
		});
	};

	const workSubmit: SubmitHandler<WorkFormModel> = async ({ firstname, lastname, email, phone, city, message }) => {
		const token = handleHCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const formData = {
			subject: 'Rekrutacja',
			firstname,
			lastname,
			email,
			phone,
			city,
			message,
			'h-captcha-response': token,
		};

		await handleFormcarry<WorkFormModel>({
			formData,
			reset,
			setButtonText,
		});
	};

	const carSubmit: SubmitHandler<CarFormModel> = async ({ firstname, lastname, email, phone, city, car, message }) => {
		const token = handleHCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const formData = {
			subject: 'Wynajem samochodu',
			firstname,
			lastname,
			email,
			phone,
			city,
			car,
			message,
			'h-captcha-response': token,
		};

		await handleFormcarry<ContactFormModel>({
			formData,
			reset,
			setButtonText,
		});
	};

	const loginSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		const token = handleHCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
			options: { captchaToken: token },
		});

		handleUserActions<T>({ error, reset, onSuccessActions: [() => navigate('/admin')] });
	};

	const recoverPasswordSubmit: SubmitHandler<RecoverPasswordFormModel> = async ({ email }) => {
		const token = handleHCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
			captchaToken: token,
		});

		handleUserActions<T>({
			error,
			reset,
			onSuccessActions: [
				() => {
					setButtonText('Wysłane!');
					setTimeout(() => {
						setButtonText('Wyślij!');
						navigate('/admin/logowanie');
					}, 2500);
				},
			],
		});
	};

	return { contactSubmit, workSubmit, carSubmit, loginSubmit, recoverPasswordSubmit };
};
