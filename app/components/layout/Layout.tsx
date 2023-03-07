import { FC, useState } from 'react';

import styles from './Layout.module.scss';
import { Navigation } from './Navigation/Navigation';
import { SideBar } from './Sidebar/Sidebar';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<SideBar />
		</div>
	);
};