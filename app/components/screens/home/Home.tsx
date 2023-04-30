import { Layout, Loader } from '@/components/ui';
import { FC } from 'react';
import { Carousel } from './carousel/Carousel';
import { useGetAllMovies } from './useGetAllMovies';

const Home: FC = () => {
	const { isLoading, movies } = useGetAllMovies();

	return (
		<Layout className='-mt-12'>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
		</Layout>
	);
};

export default Home;
