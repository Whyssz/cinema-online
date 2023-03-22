import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { useActors } from './useActors';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { AdminHeader } from '@/ui/admin/admin-table/AdminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin/admin-table/AdminTable/AdminTable';
import { Heading } from '@/ui/heading/Heading';

const ActorList: FC = () => {
	const {
		isLoading,
		handleSearch,
		deleteAsync,
		searchTerm,
		createAsync,
		data,
	} = useActors();

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default ActorList;
