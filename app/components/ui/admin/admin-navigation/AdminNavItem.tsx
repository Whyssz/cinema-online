import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { INavItem } from './admin-navigation.interface';
import styles from './AdminNavigation.module.scss';

export const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { title, link },
}) => {
	const { asPath } = useRouter();
	const classes = cn({
		[styles.active]: asPath === link,
	});

	return (
		<li>
			<Link href={link} className={classes}>
				{title}
			</Link>
		</li>
	);
};
