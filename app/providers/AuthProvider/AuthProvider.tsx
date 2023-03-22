import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useAuthContext } from 'providers/AuthContext';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const {
		Component: { isOnlyAdmin, isOnlyUser },
	} = useAuthContext();

	const { user } = useAuth();
	const { checkAuth, logout } = useActions();
	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) checkAuth();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken && user) logout();
	}, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	);
};
