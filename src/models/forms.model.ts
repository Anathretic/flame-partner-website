import ReCAPTCHA from 'react-google-recaptcha';
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';
import { InputAndTextareaConfigModel, SelectConfigModel } from './inputConfig.model';

type City = 'Zamość' | 'Lublin' | 'Chełm' | 'Biłgoraj' | '';
type Car = 'Toyota Prius II' | 'Honda Civic' | 'Skoda Fabia III' | 'Skoda Fabia II' | '';

interface DefaultFormModel {
	firstname: string;
	email: string;
	message: string;
}

// --------------- useFormSubmits -----------------------

export type FormTypes = ContactFormModel | WorkFormModel | CarFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	refCaptcha?: React.RefObject<ReCAPTCHA>;
}

// -------------------------------------------------------

export interface GenericFormProps<T extends FieldValues> {
	register: UseFormRegister<T>;
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: (data: T) => void;
	inputs: InputAndTextareaConfigModel<T>[];
	cssClass: string;
	buttonText: string;
	isLoading: boolean;
	errors: FieldErrors<T>;
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
	selects?: SelectConfigModel<T>[];
	includeReturnButton?: boolean;
}

export interface ContactFormModel extends DefaultFormModel {
	subject: string;
}

export interface WorkFormModel extends DefaultFormModel {
	lastname: string;
	phone: string;
	city: City;
}

export interface CarFormModel extends DefaultFormModel, WorkFormModel {
	car: Car;
}
