import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { AuthProvider } from './AuthProvider/AuthProvider';
import { HeadProvider } from './HeadProvider/HeadProvider';
import { ReduxToastr } from './ReduxToastr';
import { Layout } from '@/components/layout/Layout';
import { store } from '@/store/store';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const MainProvider: FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<AuthProvider>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};
