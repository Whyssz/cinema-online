import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { MaterialIcon } from '@/components/ui/materialIcon/MaterialIcon';

import { IMenuItem } from '../interface.menu';
import styles from '../menu/menu.module.scss';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter();
	const clas = cn({
		[styles.active]: asPath === item.link,
	});
	return (
		<li className={clas}>
			<Link legacyBehavior href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	);
};
