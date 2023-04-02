import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Meta } from 'utils/meta/Meta';

import { useUserEdit } from './useUserEdit';
import { IUserEditInput } from './user-edit.interface';
import { AdminNavigation } from '@/components/ui/admin/admin-navigation/AdminNavigation';
import { Button } from '@/components/ui/form-element/button/Button';
import { Switch } from '@/components/ui/form-element/switch/Switch';
import { Heading } from '@/components/ui/heading/Heading';
import { SkeletonLoading } from '@/components/ui/heading/SkeletonLoading';
import { AuthFields } from '@/screens/auth/AuthFields';

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useUserEdit(setValue);

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoading count={3} />
				) : (
					<>
						<AuthFields
							register={register}
							formState={formState}
							isPasswordRequired={false}
						/>
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<Switch
									onToggle={field.value}
									onToggled={() => field.onChange(!field.value)}
								/>
							)}
						/>
					</>
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	);
};

export default UserEdit;
