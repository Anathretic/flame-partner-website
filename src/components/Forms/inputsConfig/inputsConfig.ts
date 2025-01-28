import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from '../../../models/contactForm.model';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'name',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.name?.message,
		isInvalid: !!errors.name,
		register: register('name'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Temat:',
		inputName: 'subject',
		type: 'text',
		placeholder: 'Wprowadź temat..',
		errorMessage: errors.subject?.message,
		isInvalid: !!errors.subject,
		register: register('subject'),
	},
];
