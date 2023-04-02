import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import { IUserEditInput } from './user-edit.interface';
import { adminUpdUser, updateProfileInfo } from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { UserService } from '@/services/user.service';

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter();

	const userId = String(query.id);

	const { isLoading } = useQuery(
		[adminUpdUser, userId],
		() => UserService.getById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email);
				setValue('isAdmin', data.isAdmin);
			},
			onError(error) {
				toastrError(error, 'Get user');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		updateProfileInfo,
		(data: IUserEditInput) => UserService.updateUser(userId, data),
		{
			onError(error) {
				toastrError(error, 'Update user');
			},
			onSuccess() {
				toastr.success('Update user', 'update was successful');
				push(getAdminUrl('users'));
			},
		}
	);

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
