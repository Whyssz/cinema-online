import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/store/user/user.interface';

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokenStorage = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};
