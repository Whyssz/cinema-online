import { GetStaticProps, NextPage } from 'next';

import { MovieService } from '@/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import { Catalog } from '@/ui/catalog-movies/Catalog';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		return {
			props: {
				movies: movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default FreshPage;
