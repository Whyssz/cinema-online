import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = (
	Component: {},
	{ children }
) => {
	const { user } = useAuth();
	const { checkAuth, logout } = useActions();
	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) checkAuth();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken) logout();
	}, [pathname]);

  

	return <div>AuthProvider</div>;
};
