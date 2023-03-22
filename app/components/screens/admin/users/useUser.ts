import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { convertMongoDate } from 'utils/date/convertMongoDate';
import { toastrError } from 'utils/toastr/toaster-error';

import { adminDeleteUser, adminUsersList } from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { useDebounce } from '@/hooks/useDebounce';
import { UserService } from '@/services/user.service';
import { ITableItem } from '@/ui/admin/admin-table/AdminTable/admin-table.interface';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 400);

	const queryData = useQuery(
		[adminUsersList, debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),

			onError: (error) => {
				toastrError(error, 'User list');
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation(
		adminDeleteUser,
		(userId: string) => UserService.delete(userId),
		{
			onError: (error) => {
				toastrError(error, 'Delete user');
			},
			onSuccess: () => {
				toastr.success('Delete user', 'Delete was successful');
				queryData.refetch();
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			deleteAsync,
			searchTerm,
			...queryData,
		}),
		[deleteAsync, searchTerm, queryData]
	);
};

