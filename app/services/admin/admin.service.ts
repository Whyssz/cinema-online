import axios from 'api/interceptors';

import { getUsersUrl } from '@/config/api.config';

export const AdminService = {
	async getCountUser() {
		return await axios.get<number>(getUsersUrl('/count'));
	},
};
