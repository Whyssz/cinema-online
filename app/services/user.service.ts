import axios from 'api/interceptors';

import { getUsersUrl } from '@/config/api.config';
import { IUser } from '@/shared/types/user.types';

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async delete(id: string) {
		return axios.delete<string>(getUsersUrl(`/${id}`));
	},
};
