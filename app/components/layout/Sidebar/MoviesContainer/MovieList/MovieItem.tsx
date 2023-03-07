import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { getGenresListEach } from 'utils/movie/getGenresListEach';

import styles from '../MovieContainer.module.scss';

import { MaterialIcon } from '@/components/ui/materialIcon/MaterialIcon';
import { getGenreUrl, getMovieUrl } from '@/config/url.config';
import { IMovie } from '@/shared/types/movie.types';

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					alt={movie.title}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								{getGenresListEach(idx, movie.genres.length, name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};
