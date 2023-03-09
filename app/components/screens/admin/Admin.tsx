import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { Heading } from '@/components/ui/heading/Heading';

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<Heading title="Some statistic" />
		</Meta>
	);
};

export default Admin;
