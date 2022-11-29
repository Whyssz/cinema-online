import { FC } from 'react';

import { MenuItem } from '../MenuItem';
import { AuthItems } from '../auth/AuthItems';
import { IMenu } from '../interface.menu';

import styles from './menu.module.scss';

export const MenuBlock: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.list}>
				{items.map((item) => (
					<MenuItem item={item} key={item.title} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};
