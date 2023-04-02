import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Error404 from '../404';

import { IGalleryItem } from '@/components/ui/gallery/gallery-types';
import { getMovieUrl } from '@/config/url.config';
import SingleMovie from '@/screens/single-movie/SingleMovie';
import { IMoviePage } from '@/screens/single-movie/movie.interface';
import { MovieService } from '@/services/movie.service';

const SingleMoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie similarMovies={similarMovies || []} movie={movie} />
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll();
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug },
		}));

		return { paths, fallback: 'blocking' };
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug));

		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((genre) => genre._id)
		);

		const similarMovies: IGalleryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}));

		return {
			props: {
				similarMovies,
				movie,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default SingleMoviePage;
