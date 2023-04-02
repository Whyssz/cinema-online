import axios, { axiosClassic } from 'api/interceptors';

import { getGenresUrl } from '@/config/api.config';
import { IGenreEditInput } from '@/screens/admin/genres/edit/genre-edit.interface';
import { IGenre } from '@/shared/types/movie.types';
import { ICollection } from '@/components/screens/collections/collection.interface';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getBySlug(name: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${name}`));
	},
	
	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'));
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data);
	},

	async create() {
		return axios.post<string>(getGenresUrl('/'));
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`));
	},
};
