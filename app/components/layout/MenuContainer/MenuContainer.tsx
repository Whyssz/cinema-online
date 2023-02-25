import { FC } from 'react';

import { Tab } from './Tab';
import { GenreMenu } from './genre/GenreMenu';
import { firstMenu, userMenu } from './menu.data';

export const MenuContainer: FC = () => {
	return (
		<div>
			<Tab menu={firstMenu} />
			<GenreMenu />
			<Tab menu={userMenu} />
		</div>
	);
};
