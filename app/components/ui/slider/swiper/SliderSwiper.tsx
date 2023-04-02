import cn from 'classnames';
import { FC } from 'react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GalleryItem } from '../../gallery/GalleryItem';
import { IGalleryItem } from '../../gallery/gallery-types';

interface ISwiper {
	items: IGalleryItem[];
	cls?: string;
}

export const SliderSwiper: FC<ISwiper> = ({ items, cls }) => {
	return (
		<Swiper
			className={cn('py-2', cls)}
			spaceBetween={30}
			slidesPerView={4}
			modules={[Mousewheel]}
			mousewheel
		>
			{items.map((item) => (
				<SwiperSlide style={{ maxWidth: 200 }} key={item.link}>
					<GalleryItem item={item} variant="vertical" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
