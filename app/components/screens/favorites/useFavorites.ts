import { useQuery } from 'react-query';

import { addInFavorites } from '@/config/constantsQuery';
import { UserService } from '@/services/user.service';

export const useFavorites = () => {
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery(addInFavorites, () => UserService.getFavorites(), {
		select: ({ data }) => data,
	});

	return { isLoading, favoriteMovies, refetch };
};
