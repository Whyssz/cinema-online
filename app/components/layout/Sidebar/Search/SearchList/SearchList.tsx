import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './SearchList.module.scss';
import { getMovieUrl } from '@/config/url.config';
import { IMovie } from '@/shared/types/movie.types';

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={getMovieUrl(movie.slug || '')} key={movie.slug}>
						<Image
							src={movie.poster}
							alt={movie.title}
							width={50}
							height={50}
							draggable={false}
							style={{ objectFit: 'cover', objectPosition: 'top' }}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not Found</div>
			)}
		</div>
	);
};
