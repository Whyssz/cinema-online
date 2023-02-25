import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/layout/Layout';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const MainProvider: FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};
