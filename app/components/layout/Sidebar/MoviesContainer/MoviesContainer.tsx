import { FC } from 'react';

import { FavoriteMovies } from './FavoriteMovies/FavoriteMovies';
import { PopularMovies } from './PopularMovies/PopularMovies';

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	);
};
