import cn from 'classnames';
import { FC } from 'react';

import { SliderSwiper } from '../slider/swiper/SliderSwiper';

import { IGalleryItem } from './gallery-types';
import styles from '@/ui/gallery/Gallery.module.scss';

export const Gallery: FC<{ items: IGalleryItem[]; cls?: string }> = ({
	items,
	cls,
}) => {
	const alliance = cn(styles.gallery, cls);
	
	return (
		<SliderSwiper items={items} cls={alliance} />
		// <div className={styles.gallery}>
		// 	{items.map((item) => (
		// 		<GalleryItem item={item} key={item.link} variant="vertical" />
		// 	))}
		// </div>
	);
};
