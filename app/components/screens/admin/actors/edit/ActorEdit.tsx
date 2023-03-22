import { Controller, useForm } from 'react-hook-form';
import { Meta } from 'utils/meta/Meta';
import { generateSlug } from 'utils/string/generateSlug';

import { IActorEditInput } from './actor-edit.interface';
import { useActorEdit } from './useActorEdit';
import { AdminNavigation } from '@/components/ui/admin/admin-navigation/AdminNavigation';
import { Button } from '@/components/ui/form-element/button/Button';
import { Field } from '@/components/ui/form-element/input/Field';
import { SlugField } from '@/components/ui/form-element/input/SlugField';
import { UploadField } from '@/components/ui/form-element/upload/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { SkeletonLoading } from '@/components/ui/heading/SkeletonLoading';
import { NextPageAuth } from '@/shared/types/auth.types';
import formStyles from '@/ui/form-element/admin-form.module.scss';

export const ActorEdit: NextPageAuth = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues,
		setValue,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useActorEdit(setValue);

	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
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
							/>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
								error={errors.slug}
							/>
							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="/actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};
