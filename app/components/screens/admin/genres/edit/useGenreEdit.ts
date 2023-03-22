import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { getKeys } from 'utils/object/getKeys';
import { toastrError } from 'utils/toastr/toaster-error';

import { IGenreEditInput } from './genre-edit.interface';
import { adminUpdGenre, genreById } from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { GenreService } from '@/services/genre.service';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { query, push } = useRouter();

	const genreId = String(query.id);

	const { isLoading } = useQuery(
		[genreById, genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]));
			},
			onError: (error) => {
				toastrError(error, 'Get genre');
			},
			enabled: !!genreId,
		}
	);

	const { mutateAsync } = useMutation(
		adminUpdGenre,
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onSuccess: () => {
				toastr.success('Genre update', 'Update was successful');
				push(getAdminUrl('genres'));
			},
			onError: (error) => {
				toastrError(error, 'Genre update');
			},
		}
	);

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
