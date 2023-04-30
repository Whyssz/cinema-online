import { Field } from '@/components/ui/field/Field';
import { validEmail } from '@/shared/regexp';
import { IAuthFormData } from '@/shared/types/auth.interface';
import React, { FC } from 'react';
import { Control } from 'react-hook-form';

interface IAuthFields {
	control: Control<IAuthFormData>;
	isPassRequired?: boolean;
}

export const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				control={control}
				name='email'
				placeholder='Enter email'
				rules={{
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address ',
					},
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				control={control}
				secureTextEntry
				name='password'
				placeholder='Enter password'
				rules={
					isPassRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long',
								},
						  }
						: {}
				}
			/>
		</>
	);
};
