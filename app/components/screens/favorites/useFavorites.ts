import { useQuery } from 'react-query';

import { addInFavorites } from '@/config/constantsQuery';
import { useAuth } from '@/hooks/useAuth';
import { UserService } from '@/services/user.service';

export const useFavorites = () => {
	const { user } = useAuth();
	
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery(addInFavorites, () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user,
	}); 

	return { isLoading, favoriteMovies, refetch };
};
