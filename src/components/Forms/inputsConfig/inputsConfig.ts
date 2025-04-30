import { InputAndTextareaConfigModel, SelectConfigModel } from '../../../models/inputConfig.model';
import { CarFormModel, ContactFormModel, WorkFormModel } from '../../../models/forms.model';

export const contactFormInputs: InputAndTextareaConfigModel<ContactFormModel>[] = [
	{ label: 'Imię:', inputName: 'firstname', type: 'text', placeholder: 'Wprowadź imię..' },
	{ label: 'E-mail:', inputName: 'email', type: 'text', placeholder: 'Wprowadź e-mail..' },
	{ label: 'Temat:', inputName: 'subject', type: 'text', placeholder: 'Wprowadź temat..' },
];

export const workFormInputs: InputAndTextareaConfigModel<WorkFormModel>[] = [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
	},
	{
		label: 'Nazwisko:',
		inputName: 'lastname',
		type: 'text',
		placeholder: 'Wprowadź nazwisko..',
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
	},
	{
		label: 'Telefon:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
	},
];

export const workFormSelects: SelectConfigModel<WorkFormModel>[] = [
	{
		label: 'Miasto:',
		selectName: 'city',
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Zamość', value: 'Zamość', disabled: false },
			{ label: 'Lublin', value: 'Lublin', disabled: false },
			{ label: 'Chełm', value: 'Chełm', disabled: false },
			{ label: 'Biłgoraj', value: 'Biłgoraj', disabled: false },
		],
	},
	{
		label: 'Firma:',
		selectName: 'company',
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Wszystko', value: 'Wszystko', disabled: false },
			{ label: 'Bolt', value: 'Bolt', disabled: false },
			{ label: 'Uber', value: 'Uber', disabled: false },
			{ label: 'FreeNow', value: 'FreeNow', disabled: false },
		],
	},
];

export const carFormInputs: InputAndTextareaConfigModel<CarFormModel>[] = [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
	},
	{
		label: 'Nazwisko:',
		inputName: 'lastname',
		type: 'text',
		placeholder: 'Wprowadź nazwisko..',
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
	},
	{
		label: 'Telefon:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
	},
];

export const carFormSelects: SelectConfigModel<CarFormModel>[] = [
	{
		label: 'Miasto:',
		selectName: 'city',
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Zamość', value: 'Zamość', disabled: false },
			{ label: 'Lublin', value: 'Lublin', disabled: false },
			{ label: 'Chełm', value: 'Chełm', disabled: false },
			{ label: 'Biłgoraj', value: 'Biłgoraj', disabled: false },
		],
	},
	{
		label: 'Firma:',
		selectName: 'company',
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Wszystko', value: 'Wszystko', disabled: false },
			{ label: 'Bolt', value: 'Bolt', disabled: false },
			{ label: 'Uber', value: 'Uber', disabled: false },
			{ label: 'FreeNow', value: 'FreeNow', disabled: false },
		],
	},
	{
		label: 'Samochód:',
		selectName: 'car',
		labelValueArr: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Toyota Prius II', value: 'Toyota Prius II', disabled: false },
			{ label: 'Honda Civic', value: 'Honda Civic', disabled: false },
			{ label: 'Skoda Fabia II', value: 'Skoda Fabia II', disabled: false },
			{ label: 'Skoda Fabia III', value: 'Skoda Fabia III', disabled: false },
		],
	},
];
