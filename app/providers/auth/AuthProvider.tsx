import { getAccessToken, getUserFromStorage } from '@/service/auth/auth.helper';
import * as SplashScreen from 'expo-splash-screen';
import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useState,
} from 'react';
import { IContext, TypeUserState } from './auth-provider.interface';

export const AuthContext = createContext({} as IContext);

// let anotherRedactors = SplashScreen.preventAutoHideAsync();
SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	useEffect(() => {
		let isMounted = true;

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken();

				if (accessToken) {
					const user = await getUserFromStorage();
					if (isMounted) setUser(user);
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		checkAccessToken();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
