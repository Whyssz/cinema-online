import GenresList from '@/screens/admin/genres/GenreList';
import { NextPageAuth } from '@/shared/types/auth.types';

const GenresListPage: NextPageAuth = () => {
	return <GenresList />;
};

GenresListPage.isOnlyAdmin = true;

export default GenresListPage;
