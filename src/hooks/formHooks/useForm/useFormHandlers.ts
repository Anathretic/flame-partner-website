import HCaptcha from '@hcaptcha/react-hcaptcha';
import { HandleFormcarryModel, HandleUserActionsModel, UseFormHandlersModel } from '../../../models/hooks.model';

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

	const handleHCaptcha = (refCaptcha: React.RefObject<HCaptcha> | undefined) => {
		setIsLoading(true);
		setErrorValue('');

		if (!refCaptcha?.current) return undefined;

		const token = refCaptcha.current.getResponse();
		refCaptcha.current.resetCaptcha();

		return token || undefined;
	};

	const handleFormcarry = async <TFormData extends object>({
		formData,
		reset,
		setButtonText,
	}: HandleFormcarryModel<TFormData>) => {
		try {
			setIsLoading(true);

			const response = await fetch(`${import.meta.env.VITE_FORMCARRY_ENDPOINT}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (result.code === 200) {
				reset();
				setButtonText('Wysłane!');
			} else {
				setErrorValue('Coś poszło nie tak...');
			}
		} catch (err) {
			setErrorValue('Coś poszło nie tak...');

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

	return { handleUserActions, handleHCaptcha, handleFormcarry, handleErrors };
};
