import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useQuery } from 'react-query';

import styles from '../Admin.module.scss';

import { adminMostPopularMovie } from '@/config/constantsQuery';
import { getMovieUrl } from '@/config/url.config';
import { MovieService } from '@/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';
import { SubHeading } from '@/ui/heading/SubHeading';

export const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		adminMostPopularMovie,
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	);
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoading className="h-40" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								width={300}
								height={200}
								src={movie.bigPoster}
								alt={movie.title}
								className={styles.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	);
};
