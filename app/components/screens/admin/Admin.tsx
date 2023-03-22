import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { Statistics } from './Statistics/Statistics';
import { AdminNavigation } from '@/ui/admin/admin-navigation/AdminNavigation';
import { Heading } from '@/ui/heading/Heading';

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistic" />
			<Statistics />
		</Meta>
	);
};

export default Admin;
