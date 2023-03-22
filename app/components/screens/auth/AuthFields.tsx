import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import { validEmail } from '@/shared/regexp/regexp';
import { Field } from '@/ui/form-element/input/Field';

type IAuthFields = {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
};

export const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
						  }
						: {}
				)}
				type="password"
				placeholder="Password"
				error={errors.password}
			/>
		</>
	);
};
