import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { Meta } from 'utils/meta/Meta';
import { generateSlug } from 'utils/string/generateSlug';

import { IMovieEditInput } from './movie-edit.interface';
import { useAdminActors } from './useAdminActors';
import { useAdminGenres } from './useAdminGenres';
import { useMovieEdit } from './useMovieEdit';
import { NextPageAuth } from '@/shared/types/auth.types';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import formStyles from '@/ui/form-element/admin-form.module.scss';
import { Button } from '@/ui/form-element/button/Button';
import { Field } from '@/ui/form-element/input/Field';
import { SlugField } from '@/ui/form-element/input/SlugField';
import { UploadField } from '@/ui/form-element/upload/UploadField';
import { Heading } from '@/ui/heading/Heading';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';

const DynamicSelect = dynamic(() => import('@/ui/form-element/select/Select'), {
	ssr: false,
});

export const MovieEdit: NextPageAuth = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues,
		setValue,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useMovieEdit(setValue);
	const { isLoading: isGenresLoading, data: selectGenres } = useAdminGenres();
	const { isLoading: isActorsLoading, data: selectActors } = useAdminActors();

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			{isLoading ? (
				<SkeletonLoading count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							{...register('title', {
								required: 'Title is required!',
							})}
							placeholder="Title"
							error={errors.title}
						/>
						<SlugField
							generate={() =>
								setValue('slug', generateSlug(getValues('title')))
							}
							register={register}
							error={errors.slug}
						/>
						<Field
							{...register('parameters.country', {
								required: 'Country is required!',
							})}
							placeholder="Country"
							error={errors.parameters?.country}
							style={{ width: '31%' }}
						/>
						<Field
							{...register('parameters.duration', {
								required: 'Duration is required!',
							})}
							placeholder="Duration (min.)"
							error={errors.parameters?.duration}
							style={{ width: '31%' }}
						/>
						<Field
							{...register('parameters.year', {
								required: 'Year is required!',
							})}
							placeholder="Year"
							error={errors.parameters?.year}
							style={{ width: '31%' }}
						/>

						<Controller
							control={control}
							name="genres"
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									field={field}
									options={selectGenres || []}
									placeholder="Genres"
									error={error}
									isLoading={isGenresLoading}
									isMulti
								/>
							)}
							rules={{
								required: 'Please select at least one genre!',
							}}
						/>

						<Controller
							control={control}
							name="actors"
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									field={field}
									options={selectActors || []}
									placeholder="Actors"
									error={error}
									isLoading={isActorsLoading}
									isMulti
								/>
							)}
							rules={{
								required: 'Please select at least one actor!',
							}}
						/>

						<Controller
							name="poster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Poster"
									error={error}
									folder="movies"
									value={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Poster is required!',
							}}
						/>

						<Controller
							name="bigPoster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Big poster"
									error={error}
									folder="movies"
									value={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Big poster is required!',
							}}
						/>

						<Controller
							name="videoUrl"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Video"
									error={error}
									folder="movies"
									value={value}
									onChange={onChange}
									style={{ marginTop: -25 }}
									isNoImage
								/>
							)}
							rules={{
								required: 'Video is required!',
							}}
						/>
					</div>

					<Button>Update</Button>
				</form>
			)}
		</Meta>
	);
};
