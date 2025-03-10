import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel } from './forms.model';

type Form = ContactFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

interface DefaultModel {
	label: string;
	errorMessage: ErrorMessage;
}

interface LabelValueItem {
	value: string;
	label: string;
	disabled: boolean;
}
export interface InputAndTextareaModel extends DefaultModel {
	inputName: string;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface SelectModel extends DefaultModel {
	selectName: string;
	labelValueArr: LabelValueItem[];
}

export interface SubmitButtonHookModel {
	initialSubmitButtonState: string;
}

export interface LoaderModel {
	className: string;
}

export interface ReturnButtonModel {
	isLoading: boolean;
}

export interface SubmitButtonModel extends ReturnButtonModel {
	buttonText: string;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
}
