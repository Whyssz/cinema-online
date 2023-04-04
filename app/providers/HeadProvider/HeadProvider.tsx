import Head from 'next/head';
import { FC } from 'react';

import Favicons from './Favicons';

export const HeadProvider: FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#d32f23'} />
				<meta name="msapplication-navbutton-color" content={'#d32f23'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#d32f23'}
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{children}
		</>
	);
};
