import axios from 'api/interceptors';

import { getUsersUrl } from '@/config/api.config';
import { IProfileInput } from '@/screens/profile/profile.interface';
import { IMovie } from '@/shared/types/movie.types';
import { IUser } from '@/shared/types/user.types';

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getFavorites() {
		return axios.get<IMovie[]>(getUsersUrl('/profile/favorites'));
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'));
	},

	async toggleFavorites(movieId: string) {
		return axios.put(getUsersUrl('/profile/favorites'), { movieId });
	},

	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/profile`), data);
	},

	async updateUser(_id: string, data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data);
	},

	async getById(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`));
	},

	async delete(id: string) {
		return axios.delete<string>(getUsersUrl(`/${id}`));
	},
};
