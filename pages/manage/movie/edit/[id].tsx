import { MovieEdit } from '@/components/screens/admin/movies/edit/MovieEdit';
import { NextPageAuth } from '@/shared/types/auth.types';

const MoviesEditPage: NextPageAuth = () => {
	return <MovieEdit />;
};

MoviesEditPage.isOnlyAdmin = true;

export default MoviesEditPage;
