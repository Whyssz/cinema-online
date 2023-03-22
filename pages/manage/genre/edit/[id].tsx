import { GenreEdit } from '@/components/screens/admin/genres/edit/GenreEdit';
import { NextPageAuth } from '@/shared/types/auth.types';

const GenresEditPage: NextPageAuth = () => {
	return <GenreEdit />;
};

GenresEditPage.isOnlyAdmin = true;

export default GenresEditPage;
