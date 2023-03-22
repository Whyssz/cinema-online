import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Menu.module.scss';
import { IMenuItem } from './menu.interface';
import { MaterialIcon } from '@/ui/materialIcon/MaterialIcon';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter();

	const classes = cn({
		[styles.active]: asPath === item.link,
	});

	return (
		<li className={classes}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	);
};
