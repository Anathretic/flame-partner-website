import { Path } from 'react-hook-form';
import { InputAndTextareaConfigModel, SelectConfigModel } from '../../../models/inputConfig.model';

export const firstnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Imię:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź imię',
});

export const lastnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Nazwisko:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź nazwisko',
});

export const emailField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'E-mail:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź e-mail',
});

export const phoneField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Telefon:',
	inputName,
	type: 'tel',
	placeholder: 'Wprowadź numer telefonu',
});

export const passwordField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Hasło:',
	inputName,
	type: 'password',
	placeholder: 'Wprowadź hasło..',
});

export const subjectField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Temat:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź temat',
});

export const citySelect = <T>(selectName: Path<T>): SelectConfigModel<T> => ({
	label: 'Miasto:',
	selectName,
	labelValueArr: [
		{ label: '-- wybierz --', value: '', disabled: true },
		{ label: 'Zamość', value: 'Zamość', disabled: false },
		{ label: 'Lublin', value: 'Lublin', disabled: false },
		{ label: 'Chełm', value: 'Chełm', disabled: false },
		{ label: 'Biłgoraj', value: 'Biłgoraj', disabled: false },
		{ label: 'Radom', value: 'Radom', disabled: false },
		{ label: 'Kielce', value: 'Kielce', disabled: false },
	],
});

export const carSelect = <T>(selectName: Path<T>): SelectConfigModel<T> => ({
	label: 'Samochód:',
	selectName,
	labelValueArr: [
		{ label: '-- wybierz --', value: '', disabled: true },
		{ label: 'Toyota Prius II', value: 'Toyota Prius II', disabled: false },
		{ label: 'Honda Civic', value: 'Honda Civic', disabled: false },
		{ label: 'Skoda Fabia II', value: 'Skoda Fabia II', disabled: false },
		{ label: 'Skoda Fabia III', value: 'Skoda Fabia III', disabled: false },
	],
});
