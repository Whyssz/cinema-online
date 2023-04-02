import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { CollectionItem } from './CollectionItem';
import styles from './Collections.module.scss';
import { ICollection } from './collection.interface';
import { Description } from '@/components/ui/heading/Description';
import { Heading } from '@/components/ui/heading/Heading';

const title = 'Discovery';
const description = 'In section you will find all genres on our site';

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((item) => (
					<CollectionItem key={item._id} collection={item} />
				))}
			</section>
		</Meta>
	);
};

export default Collections;
