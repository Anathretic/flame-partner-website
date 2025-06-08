import * as yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone-lite';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

const workAndCarSchema = yup.object({
	lastname: yup
		.string()
		.min(2, 'Nazwisko jest zbyt krótkie!')
		.max(51, 'Nazwisko jest zbyt długie!')
		.minUppercase(1, 'Nazwisko zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ-]+$/, 'Tylko litery! Bez spacji!')
		.required(errorMessage.requiredField),
	phone: yup.string().phone('PL', 'Podaj prawidłowy numer!').required(errorMessage.requiredField),
	city: yup
		.string()
		.oneOf(['Zamość', 'Lublin', 'Chełm', 'Biłgoraj', 'Radom', 'Kielce', ''])
		.required(errorMessage.requiredField)
		.test('is-selected', errorMessage.requiredField, value => value !== ''),
});

export const contactSchema = yup.object({
	firstname: yup
		.string()
		.min(5, 'Imię jest za krótkie!')
		.max(35, 'Imię jest zbyt długie!')
		.minUppercase(1, 'Imię zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Używaj tylko liter!')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
	subject: yup
		.string()
		.min(5, 'Temat jest za krótki!')
		.max(40, 'Temat jest zbyt długi!')
		.minUppercase(1, 'Temat zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Używaj tylko liter!')
		.required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(2500, 'Nie więcej niż 500 słów..')
		.required(errorMessage.requiredField),
});

export const workSchema = workAndCarSchema.concat(contactSchema.omit(['subject']));

export const carSchema = yup
	.object({
		car: yup
			.string()
			.oneOf(['Toyota Prius II', 'Honda Civic', 'Skoda Fabia III', 'Skoda Fabia II', ''])
			.required(errorMessage.requiredField)
			.test('is-selected', errorMessage.requiredField, value => value !== ''),
	})
	.concat(contactSchema.omit(['subject']))
	.concat(workAndCarSchema);
