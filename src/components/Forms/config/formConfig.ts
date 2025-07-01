import {
	CarFormModel,
	ContactFormModel,
	LoginFormModel,
	RecoverPasswordFormModel,
	WorkFormModel,
} from '../../../models/forms.model';
import { InputAndTextareaConfigModel, SelectConfigModel } from '../../../models/inputConfig.model';
import {
	carSelect,
	citySelect,
	emailField,
	firstnameField,
	lastnameField,
	passwordField,
	phoneField,
	subjectField,
} from './inputsConfig';

export const contactFormInputs: InputAndTextareaConfigModel<ContactFormModel>[] = [
	firstnameField('firstname'),
	emailField('email'),
	subjectField('subject'),
];

export const workFormInputs: InputAndTextareaConfigModel<WorkFormModel>[] = [
	firstnameField('firstname'),
	lastnameField('lastname'),
	emailField('email'),
	phoneField('phone'),
];

export const workFormSelects: SelectConfigModel<WorkFormModel>[] = [citySelect('city')];

export const carFormInputs: InputAndTextareaConfigModel<CarFormModel>[] = [
	firstnameField('firstname'),
	lastnameField('lastname'),
	emailField('email'),
	phoneField('phone'),
];

export const carFormSelects: SelectConfigModel<CarFormModel>[] = [citySelect('city'), carSelect('car')];

export const loginFormInputs: InputAndTextareaConfigModel<LoginFormModel>[] = [
	emailField('email'),
	passwordField('password'),
];

export const recoverPasswordFormInputs: InputAndTextareaConfigModel<RecoverPasswordFormModel>[] = [emailField('email')];
