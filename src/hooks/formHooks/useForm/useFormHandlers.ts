import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { HandleEmailJsModel, HandleUserActionsModel, UseFormHandlersModel } from '../../../models/hooks.model';

export const useFormHandlers = ({ setIsLoading, setErrorValue }: UseFormHandlersModel) => {
	const handleUserActions = <TFormData extends object>({
		error,
		reset,
		onSuccessActions,
	}: HandleUserActionsModel<TFormData>) => {
		if (!error) {
			reset();
			setIsLoading(false);
			onSuccessActions.forEach(fn => fn());
		} else {
			setIsLoading(false);
			setErrorValue('Coś poszło nie tak.. Spróbuj ponownie!');
		}
	};

	const handleReCaptcha = (refCaptcha: React.RefObject<ReCAPTCHA> | undefined) => {
		setIsLoading(true);
		setErrorValue('');

		if (!refCaptcha?.current) {
			return null;
		}

		const token = refCaptcha.current.getValue();
		refCaptcha.current.reset();

		return token || null;
	};

	const handleEmailJs = async <TFormData extends object>({
		templateID,
		params,
		setButtonText,
		reset,
	}: HandleEmailJsModel<TFormData>) => {
		try {
			await emailjs.send(
				`${import.meta.env.VITE_SERVICE_ID}`,
				`${templateID}`,
				params,
				`${import.meta.env.VITE_PUBLIC_KEY}`
			);
			reset();
			setButtonText('Wysłane!');
		} catch (err) {
			setErrorValue('Coś poszło nie tak..');
			if (err instanceof Error) {
				console.log(`Twój błąd: ${err.message}`);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleErrors = () => {
		setIsLoading(false);
		setErrorValue('Nie bądź 🤖!');
	};

	return { handleUserActions, handleReCaptcha, handleEmailJs, handleErrors };
};
