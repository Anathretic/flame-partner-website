import { SubmitHandler } from 'react-hook-form';
import {
	CarFormModel,
	ContactFormModel,
	FormTypes,
	UseFormSubmitsModel,
	WorkFormModel,
} from '../../models/forms.model';
import { useFormHandlers } from './useFormHandlers';

export const useFormSubmits = <T extends FormTypes>({
	reset,
	refCaptcha,
	setIsLoading,
	setErrorValue,
	setButtonText,
}: UseFormSubmitsModel<T>) => {
	const { handleReCaptcha, handleEmailJs, handleErrors } = useFormHandlers({ setIsLoading, setErrorValue });

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

	return { contactSubmit, workSubmit, carSubmit };
};
