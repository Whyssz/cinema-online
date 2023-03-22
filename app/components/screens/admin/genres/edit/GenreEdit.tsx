import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';
import { Meta } from 'utils/meta/Meta';
import { generateSlug } from 'utils/string/generateSlug';

import formStyles from '@/ui/form-element/admin-form.module.scss';

import { IGenreEditInput } from './genre-edit.interface';
import { useGenreEdit } from './useGenreEdit';
import { NextPageAuth } from '@/shared/types/auth.types';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { Button } from '@/ui/form-element/button/Button';
import { Field } from '@/ui/form-element/input/Field';
import { SlugField } from '@/ui/form-element/input/SlugField';
import { Heading } from '@/ui/heading/Heading';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-element/form-text/TextEditor'),
	{
		ssr: false,
	}
);

export const GenreEdit: NextPageAuth = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues,
		setValue,
		control,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoading count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '30%' }}
							/>
							<div style={{ width: '30%' }}>
								<SlugField
									register={register}
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									error={errors.slug}
								/>
							</div>
							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '30%' }}
							/>
						</div>

						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									value={value}
									onChange={onChange}
									error={error}
									placeholder="Description"
								/>
							)}
							rules={{
								validate: {
									validate: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required',
								},
							}}
						/>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};
