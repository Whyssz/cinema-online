import { GetStaticProps, NextPage } from 'next';
import { getGenresList } from 'utils/movie/listProcessing';

import { getActorUrl, getMovieUrl } from '@/config/url.config';
import Home from '@/screens/home/Home';
import { IHome } from '@/screens/home/home.interface';
import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';
import { IGalleryItem } from '@/ui/gallery/gallery-types';
import { ISlide } from '@/ui/slider/slider-interface';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: dataMovies } = await MovieService.getAll();

		const slides: ISlide[] = dataMovies.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			bigPoster: movie.bigPoster,
			subTitle: getGenresList(movie.genres),
			title: movie.title,
		}));

		const { data: dataActors } = await ActorService.getAll();

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+ ${actor.countMovies + 1}  movies`,
			},
		}));

		const dataTrendingMovies = await MovieService.getMostPopularMovies();

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug),
			}));

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		};
	} catch (error) {
		return {
			props: {
				slides: [],
			},
		};
	}
};

export default HomePage;
