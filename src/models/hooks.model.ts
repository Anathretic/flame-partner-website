import { UseFormReset } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { AuthError } from '@supabase/supabase-js';
import { CarFormModel, ContactFormModel, LoginFormModel, RecoverPasswordFormModel, WorkFormModel } from './forms.model';
import { BlogAndArticleDataModel, RentCarDataModel } from './data.model';

export type FormTypes = ContactFormModel | WorkFormModel | CarFormModel | LoginFormModel | RecoverPasswordFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	refCaptcha?: React.RefObject<HCaptcha>;
}

export type UseFormHandlersModel = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
};

export interface HandleFormcarryModel<TFormData extends object> {
	formData: TFormData;
	reset: () => void;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
}

export interface HandleUserActionsModel<TFormData extends object> {
	error: AuthError | null;
	reset: UseFormReset<TFormData>;
	onSuccessActions: (() => void)[];
}

export interface UseCarouselOptionsModel {
	setCurrent: React.Dispatch<React.SetStateAction<number>>;
	current: number;
	slides: RentCarDataModel[] | BlogAndArticleDataModel[];
}

export interface UseCarouselTouchModel {
	onSwipeLeft: () => void;
	onSwipeRight: () => void;
}

export interface UseSlideOptionsModel {
	slideRef: React.RefObject<HTMLLIElement>;
}

export interface UseSubmitFormButtonModel {
	initialSubmitButtonState: string;
}
