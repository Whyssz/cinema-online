import dynamic from 'next/dynamic';
import { FC } from 'react';

import { firstMenu, userMenu } from './menu.data';

const DynamicGenreMenu = dynamic(() => import('./genre/GenreMenu'), {
	ssr: false,
});

const DynamicTab = dynamic(() => import('./Tab'), {
	ssr: false,
});

export const MenuContainer: FC = () => {
	return (
		<div>
			<DynamicTab menu={firstMenu} />
			<DynamicGenreMenu />
			<DynamicTab menu={userMenu} />
		</div>
	);
};
