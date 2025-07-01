import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { InputAndTextareaConfigModel, SelectConfigModel } from './inputConfig.model';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type City = 'Zamość' | 'Lublin' | 'Chełm' | 'Biłgoraj' | 'Radom' | 'Kielce' | '';
export type Car = 'Toyota Prius II' | 'Honda Civic' | 'Skoda Fabia III' | 'Skoda Fabia II' | '';

interface DefaultFormModel {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	subject: string;
	city: City;
	car: Car;
	message: string;
	password: string;
}

export interface GenericFormProps<T extends FieldValues> {
	register: UseFormRegister<T>;
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: (data: T) => void;
	inputs: InputAndTextareaConfigModel<T>[];
	cssClass: string;
	buttonText: string;
	isLoading: boolean;
	errors: FieldErrors<T>;
	refCaptcha: React.RefObject<HCaptcha>;
	errorValue: string;
	includeTextarea: boolean;
	selects?: SelectConfigModel<T>[];
	includeReturnButton?: boolean;
	formRef?: React.RefObject<HTMLFormElement>;
}

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'subject' | 'message'>;

export type WorkFormModel = Pick<DefaultFormModel, 'firstname' | 'lastname' | 'email' | 'phone' | 'city' | 'message'>;

export type CarFormModel = Pick<
	DefaultFormModel,
	'firstname' | 'lastname' | 'email' | 'phone' | 'city' | 'car' | 'message'
>;

export type LoginFormModel = Pick<DefaultFormModel, 'email' | 'password'>;

export type RecoverPasswordFormModel = Pick<DefaultFormModel, 'email'>;
