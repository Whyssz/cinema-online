import { GetStaticProps, NextPage } from 'next';
import { getGenresList } from 'utils/movie/listProcessing';

import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';
import { ISlide } from '@/components/ui/slider/slider-interface';
import { getMovieUrl } from '@/config/url.config';
import { MovieService } from '@/services/movie.service';

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

		return {
			props: {
				slides,
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
