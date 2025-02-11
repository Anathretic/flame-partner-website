type City = 'Zamość' | 'Lublin' | 'Chełm' | 'Biłgoraj' | '';
type Company = 'Wszystko' | 'Uber' | 'Bolt' | 'FreeNow' | '';

export interface ContactFormModel {
	firstname: string;
	email: string;
	subject: string;
	message: string;
}

export interface WorkFormModel {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	city: City;
	company: Company;
	message: string;
}
