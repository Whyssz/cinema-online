import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { FavoriteButton } from '../single-movie/favorite-button/FavoriteButton';

import styles from './Favorites.module.scss';
import { getMovieUrl } from '@/config/url.config';
import { useAuth } from '@/hooks/useAuth';
import { IMovie } from '@/shared/types/movie.types';

export const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth();

	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={movie._id} />}
			<Link className={styles.item} href={getMovieUrl(movie.slug)}>
				<Image
					alt={movie.title}
					src={movie.bigPoster}
					draggable={false}
					fill
					priority
				/>
				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	);
};
