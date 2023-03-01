import { api } from 'api/interceptors';

import { getMoviesUrl } from '@/config/api.config';
import { IMovie } from '@/shared/types/movie.types';

export const MovieService = {
	async getAll(searchTerm?: string) {
		return api.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
};
