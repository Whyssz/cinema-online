import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import {
	adminCreateGenre,
	adminDeleteUser,
	adminGenreList,
} from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { useDebounce } from '@/hooks/useDebounce';
import { GenreService } from '@/services/genre.service';
import { ITableItem } from '@/ui/admin/admin-table/AdminTable/admin-table.interface';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 400);

	const { push } = useRouter();

	const queryData = useQuery(
		[adminGenreList, debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),

			onError: (error) => {
				toastrError(error, 'Genre list');
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: createAsync } = useMutation(
		adminCreateGenre,
		() => GenreService.create(),
		{
			onError: (error) => {
				toastrError(error, 'Create genre');
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create genre', 'Create was successful');
				push(getAdminUrl(`genre/edit/${_id}`));
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		adminDeleteUser,
		(genreId: string) => GenreService.delete(genreId),
		{
			onError: (error) => {
				toastrError(error, 'Delete genre');
			},
			onSuccess: () => {
				toastr.success('Delete genre', 'Delete was successful');
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
