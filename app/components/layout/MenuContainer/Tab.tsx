import dynamic from 'next/dynamic';
import { FC } from 'react';

import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';
import { IMenu } from './menu.interface';

const AuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
});

export const Tab: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};
