import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { GalleryItem } from '../gallery/GalleryItem';
import { Description } from '../heading/Description';
import { Heading } from '../heading/Heading';

import styles from './Catalog.module.scss';
import { ICatalog } from './catalog-interface';
import { getMovieUrl } from '@/config/url.config';

export const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title}>
			<Heading title={title} className={styles.heading} />

			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies?.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: { title: movie.title },
						}}
					/>
				))}
			</section>
		</Meta>
	);
};
