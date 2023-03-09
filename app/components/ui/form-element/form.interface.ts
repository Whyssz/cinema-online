import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export type IFieldProps = {
	placeholder: string;
	error?: FieldError | undefined;
	// error?: FieldValues | undefined; // use this if you specify a certain type of FormState
};

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
