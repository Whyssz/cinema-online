import dynamic from 'next/dynamic';
import { FC } from 'react';

import { PopularMovies } from './PopularMovies/PopularMovies';

export const DynamicFavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{ ssr: false }
);

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	);
};
