import { api } from 'api/interceptors';

import { getGenresUrl } from '@/config/api.config';
import { IGenre } from '@/shared/types/movie.types';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return api.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
};
