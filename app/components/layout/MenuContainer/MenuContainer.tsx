import dynamic from 'next/dynamic';
import { FC } from 'react';

import { Tab } from './Tab';
import { firstMenu, userMenu } from './menu.data';

const GenreMenu = dynamic(() => import('./genre/GenreMenu'), {
	ssr: false,
});

export const MenuContainer: FC = () => {
	return (
		<div>
			<Tab menu={firstMenu} />
			<GenreMenu />
			<Tab menu={userMenu} />
		</div>
	);
};
