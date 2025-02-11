import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel, WorkFormModel } from '../../../models/forms.model';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
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

export const workFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<WorkFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
	},
	{
		label: 'Nazwisko:',
		inputName: 'lastname',
		type: 'text',
		placeholder: 'Wprowadź nazwisko..',
		errorMessage: errors.lastname?.message,
		isInvalid: !!errors.lastname,
		register: register('lastname'),
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
		label: 'Telefon:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
		errorMessage: errors.phone?.message,
		isInvalid: !!errors.phone,
		register: register('phone'),
	},
];

export const workFormSelectsConfig = (errors: FieldErrors, register: UseFormRegister<WorkFormModel>) => [
	{
		label: 'Miasto',
		selectName: 'city',
		register: register('city'),
		isInvalid: !!errors.city,
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Zamość', value: 'Zamość', disabled: false },
			{ label: 'Lublin', value: 'Lublin', disabled: false },
			{ label: 'Chełm', value: 'Chełm', disabled: false },
			{ label: 'Biłgoraj', value: 'Biłgoraj', disabled: false },
		],
		errorMessage: errors.city?.message,
	},
	{
		label: 'Firma',
		selectName: 'company',
		register: register('company'),
		isInvalid: !!errors.company,
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Wszystko', value: 'Wszystko', disabled: false },
			{ label: 'Bolt', value: 'Bolt', disabled: false },
			{ label: 'Uber', value: 'Uber', disabled: false },
			{ label: 'FreeNow', value: 'FreeNow', disabled: false },
		],
		errorMessage: errors.company?.message,
	},
];
