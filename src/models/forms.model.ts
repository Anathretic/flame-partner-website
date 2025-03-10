type City = 'Zamość' | 'Lublin' | 'Chełm' | 'Biłgoraj' | '';
type Company = 'Wszystko' | 'Uber' | 'Bolt' | 'FreeNow' | '';

interface DefaultFormModel {
	firstname: string;
	email: string;
	message: string;
}

export interface ContactFormModel extends DefaultFormModel {
	subject: string;
}

export interface WorkFormModel extends DefaultFormModel {
	lastname: string;
	phone: string;
	city: City;
	company: Company;
}
