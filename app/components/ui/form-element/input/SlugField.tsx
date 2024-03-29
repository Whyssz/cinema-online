import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Field } from './Field';
import styles from './Field.module.scss';

interface ISlugField {
	error?: FieldError;
	register: UseFormRegister<any>;
	generate: () => void;
}

export const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required!',
				})}
				placeholder="Slug"
				error={error}
			/>
			<span className={styles.badge} onClick={generate}>
				generate
			</span>
		</div>
	);
};
