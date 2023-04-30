import { queryData } from '@/config/query.config';
import { useAuth } from '@/hooks/useAuth';
import { UserService } from '@/service/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useFavorites = () => {
	const { user } = useAuth();

	const { data: favorites, isLoading } = useQuery(
		[queryData.getFavMovies],
		() => UserService.getFavorites(),
		{
			enabled: !!user,
		}
	);

	return { favorites, isLoading };
};
