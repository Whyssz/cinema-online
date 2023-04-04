import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import { setMovieRating, uMovieRating } from '@/config/constantsQuery';
import { useAuth } from '@/hooks/useAuth';
import { RatingService } from '@/services/rating.service';

export const useRateMovie = (movieId: string) => {
	const { user } = useAuth();
	const [rating, setRating] = useState(0);
	const [isSended, setIsSended] = useState(false);

	const { refetch } = useQuery(
		[uMovieRating, movieId],
		() => RatingService.getByUserId(movieId),
		{
			onSuccess({ data }) {
				setRating(data);
			},
			enabled: !!movieId && !!user,
		}
	);

	const { mutateAsync } = useMutation(
		setMovieRating,
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError(error) {
				toastrError(error, 'Rating movie');
			},
			onSuccess() {
				toastr.success('Update rating', 'update was successful');
				setIsSended(true);
				refetch();

				setTimeout(() => {
					setIsSended(false);
				}, 2000);
			},
		}
	);

	const handleClick = async (nextValue: number) => {
		setRating(nextValue);
		await mutateAsync({ value: nextValue });
	};

	return { rating, isSended, handleClick };
};
