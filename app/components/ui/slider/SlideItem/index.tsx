import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from '../Slider.module.scss';
import { ISlideItem } from '../slider-interface';

export const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter();

	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					fill
					priority
					unoptimized // if small size only
					draggable={false}
					className={styles.image}
					alt={slide.title}
					src={slide.bigPoster}
				/>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};
