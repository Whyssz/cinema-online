import { FC, PropsWithChildren, createContext, useContext } from 'react';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';

export const useAuthContext = () => useContext(AuthContext);

export const AuthContext = createContext<TypeComponentAuthFields>(
	{} as TypeComponentAuthFields
);

type AuthContextComponent = TypeComponentAuthFields & TypeComponentAuthFields;

export const AuthProvider: FC<PropsWithChildren<AuthContextComponent>> = ({
	Component,
	children,
}) => {
	return (
		<AuthContext.Provider value={{Component}}>{children}</AuthContext.Provider>
	);
};
