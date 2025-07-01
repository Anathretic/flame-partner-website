import { useState, useEffect } from 'react';
import { UseSubmitFormButtonModel } from '../../models/hooks.model';

export const useSubmitFormButton = ({ initialSubmitButtonState }: UseSubmitFormButtonModel) => {
	const [buttonText, setButtonText] = useState(initialSubmitButtonState);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		if (buttonText === 'Zaloguj') return;

		if (buttonText !== initialSubmitButtonState && initialSubmitButtonState === 'Wyślij') {
			timeout = setTimeout(() => setButtonText(initialSubmitButtonState), 2500);
		}

		return () => clearTimeout(timeout);
	}, [buttonText]);

	return [buttonText, setButtonText] as const;
};
