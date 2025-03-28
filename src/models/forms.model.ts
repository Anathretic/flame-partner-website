import ReCAPTCHA from 'react-google-recaptcha';
import { UseFormReset } from 'react-hook-form';

type City = 'Zamość' | 'Lublin' | 'Chełm' | 'Biłgoraj' | '';
type Company = 'Wszystko' | 'Uber' | 'Bolt' | 'FreeNow' | '';

interface DefaultFormModel {
	firstname: string;
	email: string;
	message: string;
}

// --------------- useFormSubmits -----------------------

export type FormTypes = ContactFormModel | WorkFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	refCaptcha?: React.RefObject<ReCAPTCHA>;
}

// -------------------------------------------------------

export interface ContactFormModel extends DefaultFormModel {
	subject: string;
}

export interface WorkFormModel extends DefaultFormModel {
	lastname: string;
	phone: string;
	city: City;
	company: Company;
}
