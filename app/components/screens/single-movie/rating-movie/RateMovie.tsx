import { FC } from 'react';
import StarRating from 'react-star-rating-component';

import styles from './RateMovie.module.scss';
import { useRateMovie } from './useRateMovie';
import { AuthButton } from '@/components/ui/video-player/auth-placeholder/AuthButton';
import { useAuth } from '@/hooks/useAuth';

interface IRateMovie {
	id: string;
	slug: string;
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth();
	const { rating, handleClick, isSended } = useRateMovie(id);

	return (
		<div className={styles.wrapper}>
			{rating === 0 ? (
				<>
					<h3>How do you like the movie?</h3>
					<p>Ratings improve recommendations</p>
				</>
			) : (
				<h3 className="mb-3">Your evaluation: {rating}</h3>
			)}
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	);
};
export default RateMovie;
