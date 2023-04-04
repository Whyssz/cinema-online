import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toastrError } from 'utils/toastr/toaster-error';

import { useFavorites } from '../../favorites/useFavorites';

import styles from './FavoriteButton.module.scss';
import { useAuth } from '@/hooks/useAuth';
import { UserService } from '@/services/user.service';

export const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false);

	const { favoriteMovies, refetch } = useFavorites();

	useEffect(() => {
		if (favoriteMovies) {
			const isHasMovie = favoriteMovies.some((f) => f._id === movieId);
			if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
		}
	}, [favoriteMovies, isSmashed, movieId]);

	const { mutateAsync } = useMutation(
		'update actor',
		() => UserService.toggleFavorites(movieId),
		{
			onError(error) {
				toastrError(error, 'Update favorite list');
			},
			onSuccess() {
				setIsSmashed(!isSmashed);
				refetch();
			},
		}
	);

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: 'url("/img-elements/heart-animation.png")' }}
		/>
	);
};
