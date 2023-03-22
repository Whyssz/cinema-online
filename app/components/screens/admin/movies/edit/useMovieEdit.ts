import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { getKeys } from 'utils/object/getKeys';
import { toastrError } from 'utils/toastr/toaster-error';

import { IMovieEditInput } from './movie-edit.interface';
import { adminUpdMovie } from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { MovieService } from '@/services/movie.service';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { query, push } = useRouter();

	const movieId = String(query.id);

	const { isLoading } = useQuery(
		[movieId, movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]));
			},
			onError: (error) => {
				toastrError(error, 'Get movie');
			},
			enabled: !!movieId,
		}
	);

	const { mutateAsync } = useMutation(
		adminUpdMovie,
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onSuccess: () => {
				toastr.success('Movie update', 'Update was successful');
				push(getAdminUrl('movies'));
			},
			onError: (error) => {
				toastrError(error, 'Movie update');
			},
		}
	);

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
