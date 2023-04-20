import { IUser } from '@/shared/types/user.interface';
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
	const [user, setUser] = useState<TypeUserState>({} as IUser);
	// const [user, setUser] = useState<TypeUserState>(null);

	useEffect(() => {
		let mounted = true;

		const checkAuthToken = async () => {
			try {
			} catch {
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		checkAuthToken();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
