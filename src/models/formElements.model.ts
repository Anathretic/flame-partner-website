import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel } from './contactForm.model';

type Form = ContactFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;
export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	errorMessage: ErrorMessage;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface SubmitButtonModel {
	isLoading: boolean;
	buttonText: string;
}

export interface SubmitButtonHookModel {
	initialSubmitButtonState: string;
}

export interface LoaderModel {
	className: string;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
}
