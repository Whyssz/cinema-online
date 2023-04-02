import Image from 'next/image';
import { FC } from 'react';

import styles from './Banner.module.scss';

interface IBanner {
	image: string;
	Detail?: FC | null;
}

export const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt=""
				src={image}
				className="image-like-bg object-top"
				draggable={false}
				unoptimized
				priority
				fill
			/>
			{Detail && <Detail />}
		</div>
	);
};
