import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { useGenres } from './useGenres';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { AdminHeader } from '@/ui/admin/admin-table/AdminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin/admin-table/AdminTable/AdminTable';
import { Heading } from '@/ui/heading/Heading';

const GenreList: FC = () => {
	const {
		isLoading,
		handleSearch,
		deleteAsync,
		searchTerm,
		data,
		createAsync,
	} = useGenres();

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default GenreList;
