import { Path } from 'react-hook-form';

export interface InputAndTextareaConfigModel<T> {
	label: string;
	inputName: Path<T>;
	type?: string;
	placeholder?: string;
	readOnly?: boolean;
}

export interface SelectConfigModel<T> {
	label: string;
	selectName: Path<T>;
	labelValueArr: { label: string; value: string; disabled: boolean }[];
}
