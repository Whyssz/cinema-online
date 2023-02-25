import { FC } from 'react';

import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';
import { AuthItem } from './auth/AuthItem';
import { IMenu } from './menu.interface';

export const Tab: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItem /> : null}
			</ul>
		</div>
	);
};
