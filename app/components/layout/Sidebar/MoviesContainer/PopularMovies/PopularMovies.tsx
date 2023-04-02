import { FC } from 'react';
import { useQuery } from 'react-query';

import MovieList from '../MovieList/MovieList';

import { popularMovieSide } from '@/config/constantsQuery';
import { MovieService } from '@/services/movie.service';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';

export const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(popularMovieSide, () =>
		MovieService.getMostPopularMovies()
	);

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoading count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	);
};
