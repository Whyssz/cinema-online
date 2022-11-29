import { FC } from 'react';

import { MenuBlock } from './menu';
import { mainMenu, userMenu } from './menu.data';

export const MenuContainer: FC = () => {
	return (
		<div>
			<MenuBlock menu={mainMenu}/>
			{/* Genres menu */}
			<MenuBlock menu={userMenu}/>
		</div>
	);
};
