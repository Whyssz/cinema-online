import { useFavorites } from '@/components/screens/favorites/useFavorites';
import { queryData } from '@/config/query.config';
import { UserService } from '@/service/user/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useFavorite = (movieId: string) => {
	const [isSmashed, setIsSmashed] = useState(false);

	const { favorites } = useFavorites();

	useEffect(() => {
		if (!favorites?.length) return;

		const isHasMovie = favorites.some(item => item._id === movieId);

		if (isHasMovie !== isHasMovie) setIsSmashed(isHasMovie);
	}, [isSmashed, favorites, movieId]);

	const queryClient = useQueryClient();

	const { mutate: toggleFavorites } = useMutation(
		[queryData.getFavMovies],
		() => UserService.toggleFavorites(movieId),
		{
			async onSuccess() {
				await queryClient.invalidateQueries([queryData.getFavMovies]);
			},
		}
	);

  return {isSmashed, toggleFavorites}
};
