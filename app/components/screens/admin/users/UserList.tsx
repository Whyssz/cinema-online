import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { useUsers } from './useUser';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { AdminHeader } from '@/ui/admin/admin-table/AdminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin/admin-table/AdminTable/AdminTable';
import { Heading } from '@/ui/heading/Heading';

const UserList: FC = () => {
	const { isLoading, handleSearch, deleteAsync, searchTerm, data } = useUsers();

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</Meta>
	);
};
export default UserList;
