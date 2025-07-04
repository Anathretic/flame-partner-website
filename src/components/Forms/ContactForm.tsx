import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormInputs } from './config/formConfig';
import { GenericForm } from './GenericForm/GenericForm';
import { useFormSubmits } from '../../hooks/formHooks/useForm/useFormSubmits';
import { useSubmitFormButton } from '../../hooks/formHooks/useSubmitFormButton';
import { contactSchema } from '../../schemas/schemas';
import { ContactFormModel } from '../../models/forms.model';

import styles from '../../sections/Contact/styles/styles.module.scss';

export const ContactForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState: 'Wyślij' });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: { firstname: '', email: '', subject: '', message: '' },
		resolver: yupResolver(contactSchema),
	});

	const refCaptcha = useRef<HCaptcha>(null);

	const { contactSubmit } = useFormSubmits<ContactFormModel>({
		reset,
		refCaptcha,
		setIsLoading,
		setErrorValue,
		setButtonText,
	});

	return (
		<GenericForm<ContactFormModel>
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={contactSubmit}
			inputs={contactFormInputs}
			cssClass={styles.contact__form}
			buttonText={buttonText}
			isLoading={isLoading}
			errors={errors}
			errorValue={errorValue}
			refCaptcha={refCaptcha}
			includeTextarea={true}
			includeReturnButton={false}
		/>
	);
};
