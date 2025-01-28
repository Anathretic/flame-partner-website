import * as yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone-lite';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = yup.object({
	name: yup
		.string()
		.min(5, 'Coś za mało liter!')
		.max(35, 'Chyba trochę za dużo..')
		.minUppercase(1, 'Imię zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Używaj tylko liter!')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
	subject: yup
		.string()
		.min(5, 'Coś za mało liter!')
		.max(40, 'Chyba trochę za dużo..')
		.minUppercase(1, 'Temat zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Używaj tylko liter!')
		.required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(2500, 'Nie więcej niż 500 słów..')
		.required(errorMessage.requiredField),
});
