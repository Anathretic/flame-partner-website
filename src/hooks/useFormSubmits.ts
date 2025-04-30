import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CarFormModel, ContactFormModel, FormTypes, UseFormSubmitsModel, WorkFormModel } from '../models/forms.model';

export const useFormSubmits = <T extends FormTypes>({
	reset,
	refCaptcha,
	setIsLoading,
	setErrorValue,
	setButtonText,
}: UseFormSubmitsModel<T>) => {
	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, subject, message }) => {
		setIsLoading(true);
		setErrorValue('');

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			email,
			subject,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					setButtonText('Wysłane!');
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	const workSubmit: SubmitHandler<WorkFormModel> = async ({
		firstname,
		lastname,
		email,
		phone,
		city,
		company,
		message,
	}) => {
		setIsLoading(true);
		setErrorValue('');

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			subject: 'rekrutacji',
			firstname,
			lastname,
			email,
			phone,
			city,
			company,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_SPECIAL_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					setButtonText('Wysłane!');
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	const carSubmit: SubmitHandler<CarFormModel> = async ({
		firstname,
		lastname,
		email,
		phone,
		city,
		company,
		car,
		message,
	}) => {
		setIsLoading(true);
		setErrorValue('');

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			subject: 'wynajmu samochodu',
			firstname,
			lastname,
			email,
			phone,
			city,
			company,
			car,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_SPECIAL_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					setButtonText('Wysłane!');
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	return { contactSubmit, workSubmit, carSubmit };
};
