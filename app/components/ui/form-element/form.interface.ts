import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
} from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import {
	FieldError,
	FieldErrorsImpl,
	FieldValues,
	Merge,
} from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string;
	error?:
		| FieldError
		| Merge<FieldError, FieldErrorsImpl<any>>
		| FieldValues
		| undefined;
}

export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps;

export interface IField extends TypeInputPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps;

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...events: any[]) => void;
	value: string;
}

export interface IUploadField {
	folder?: string;
	value?: string;
	placeholder?: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
	onChange: (...event: any[]) => void;
}