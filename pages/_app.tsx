import type { AppProps } from 'next/app';
import { AuthProvider } from 'providers/AuthContext';
import { MainProvider } from 'providers/MainProvider';

import '@/assets/styles/globals.scss';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

type TypeAppProps = AppProps & TypeComponentAuthFields;

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<AuthProvider Component={Component}>
			<MainProvider>
				<Component {...pageProps} />
			</MainProvider>
		</AuthProvider>
	);
}
