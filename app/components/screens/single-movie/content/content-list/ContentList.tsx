import Link from 'next/link';
import { FC, Fragment } from 'react';

import { IContentList } from '../content.interface';

import styles from './ContentList.module.scss';

export const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}</div>
			<div className={styles.links}>
				{links.map((link, idx) => (
					<Fragment key={link._id}>
						<Link href={link.link}>{link.title}</Link>
						{idx + 1 === links.length ? '' : ', '}
					</Fragment>
				))}
			</div>
		</div>
	);
};
