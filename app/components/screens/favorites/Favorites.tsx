import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { FavoriteItem } from './FavoriteItem';
import styles from './Favorites.module.scss';
import { useFavorites } from './useFavorites';
import { Heading } from '@/components/ui/heading/Heading';
import { SkeletonLoading } from '@/components/ui/heading/SkeletonLoading';

export const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites();

	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoading
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	);
};
