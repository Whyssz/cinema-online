import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { useMovies } from './useMovies';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { AdminHeader } from '@/ui/admin/admin-table/AdminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin/admin-table/AdminTable/AdminTable';
import { Heading } from '@/ui/heading/Heading';

const MovieList: FC = () => {
	const {
		isLoading,
		handleSearch,
		deleteAsync,
		searchTerm,
		createAsync,
		data,
	} = useMovies();

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default MovieList;
