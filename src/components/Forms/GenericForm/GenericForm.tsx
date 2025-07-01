import { FieldValues, Path } from 'react-hook-form';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	SelectElement,
	TextareaElement,
} from '../components/FormElements';
import { GenericFormProps } from '../../../models/forms.model';

export const GenericForm = <T extends FieldValues>({
	register,
	handleSubmit,
	onSubmit,
	inputs,
	cssClass,
	buttonText,
	isLoading,
	errors,
	refCaptcha,
	errorValue,
	includeTextarea,
	selects = [],
	includeReturnButton,
	formRef,
}: GenericFormProps<T>) => {
	return (
		<form className={cssClass} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
			{inputs.map((input, id) => {
				const error = errors[input.inputName as Path<T>];
				return (
					<InputElement
						key={id}
						label={input.label}
						inputName={input.inputName}
						type={input.type}
						placeholder={input.placeholder}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(input.inputName as Path<T>)}
					/>
				);
			})}
			{selects.map((select, id) => {
				const error = errors[select.selectName as Path<T>];
				return (
					<SelectElement
						key={id}
						label={select.label}
						selectName={select.selectName}
						labelValueArr={select.labelValueArr}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(select.selectName)}
					/>
				);
			})}
			{includeTextarea && (
				<TextareaElement
					label='Wiadomość:'
					inputName='message'
					placeholder='Wprowadź wiadomość'
					errorMessage={errors.message?.message}
					aria-invalid={errors.message ? true : false}
					{...register('message' as Path<T>)}
				/>
			)}
			<ReCaptchaV2Component refCaptcha={refCaptcha} errorValue={errorValue} />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
			{includeReturnButton && <ReturnButton isLoading={isLoading} />}
		</form>
	);
};
