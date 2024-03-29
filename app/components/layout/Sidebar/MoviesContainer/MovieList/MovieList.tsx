import Link from 'next/link';
import { FC } from 'react';

import styles from '../MovieContainer.module.scss';
import { IMovieList } from '../movie-list.interface';

import { MovieItem } from './MovieItem';

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				{link === '/trending' ? 'All trending movies' : 'All popular movies'}
			</Link>
		</div>
	);
};
export default MovieList;
