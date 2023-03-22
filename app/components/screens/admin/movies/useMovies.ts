import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import { getGenresList } from '../../../../utils/movie/listProcessing';

import {
	adminCreateMovie,
	adminDeleteUser,
	adminMovieList,
} from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { useDebounce } from '@/hooks/useDebounce';
import { MovieService } from '@/services/movie.service';
import { ITableItem } from '@/ui/admin/admin-table/AdminTable/admin-table.interface';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 400);

	const { push } = useRouter();

	const queryData = useQuery(
		[adminMovieList, debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),

			onError: (error) => {
				toastrError(error, 'Movie list');
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: createAsync } = useMutation(
		adminCreateMovie,
		() => MovieService.create(),
		{
			onError: (error) => {
				toastrError(error, 'Create movie');
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create movie', 'Create was successful');
				push(getAdminUrl(`movie/edit/${_id}`));
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		adminDeleteUser,
		(movieId: string) => MovieService.delete(movieId),
		{
			onError: (error) => {
				toastrError(error, 'Delete movie');
			},
			onSuccess: () => {
				toastr.success('Delete movie', 'Delete was successful');
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
