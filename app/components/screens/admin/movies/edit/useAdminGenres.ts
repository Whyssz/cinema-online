import { useQuery } from 'react-query';
import { toastrError } from 'utils/toastr/toaster-error';

import { listGenres } from '@/config/constantsQuery';
import { GenreService } from '@/services/genre.service';
import { IOption } from '@/ui/form-element/select/select-interface';

export const useAdminGenres = () => {
	const queryData = useQuery(listGenres, () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					value: genre._id,
					label: genre.name,
				})
			),
		onError: (error) => {
			toastrError(error, 'Select by genres');
		},
	});

	return queryData;
};
