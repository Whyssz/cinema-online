import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import {
	adminActorList,
	adminCreateActor,
	adminDeleteUser,
} from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { useDebounce } from '@/hooks/useDebounce';
import { ActorService } from '@/services/actor.service';
import { ITableItem } from '@/ui/admin/admin-table/AdminTable/admin-table.interface';

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 400);

	const { push } = useRouter();

	const queryData = useQuery(
		[adminActorList, debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				),

			onError: (error) => {
				toastrError(error, 'Actor list');
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: createAsync } = useMutation(
		adminCreateActor,
		() => ActorService.create(),
		{
			onError: (error) => {
				toastrError(error, 'Create actor');
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create actor', 'Create was successful');
				push(getAdminUrl(`actor/edit/${_id}`));
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		adminDeleteUser,
		(actorId: string) => ActorService.delete(actorId),
		{
			onError: (error) => {
				toastrError(error, 'Delete actor');
			},
			onSuccess: () => {
				toastr.success('Delete actor', 'Delete was successful');
				queryData.refetch();
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			deleteAsync,
			searchTerm,
			createAsync,
			...queryData,
		}),
		[deleteAsync, searchTerm, queryData, createAsync]
	);
};
