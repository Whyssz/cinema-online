import { SubmitHandler, UseFormSetValue } from 'react-hook-form';

import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import { IProfileInput } from './profile.interface';
import { updateUserProfile, userProfile } from '@/config/constantsQuery';
import { UserService } from '@/services/user.service';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(userProfile, () => UserService.getProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email);
		},
		onError: (error) => {
			toastrError(error, 'Get movie');
		},
	});

	const { mutateAsync } = useMutation(
		updateUserProfile,
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess: () => {
				toastr.success('Movie update', 'Update was successful');
			},
			onError: (error) => {
				toastrError(error, 'Movie update');
			},
		}
	);

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
