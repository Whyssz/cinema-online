import { FC } from 'react';

import MovieList from '../MovieList/MovieList';

import NotAuthFavorites from './NotAuthFavorites';
import { useFavorites } from '@/components/screens/favorites/useFavorites';
import { SkeletonLoading } from '@/components/ui/heading/SkeletonLoading';
import { useAuth } from '@/hooks/useAuth';

const FavoriteMovies: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites();
	const { user } = useAuth();

	if (!user && typeof window !== 'undefined') return <NotAuthFavorites />;

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoading count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			title="Favorites"
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
		/>
	);
};
export default FavoriteMovies;
