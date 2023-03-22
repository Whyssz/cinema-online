import { ChangeEvent, FC } from 'react';

import { AdminCreateBtn } from './AdminCreateBtn';
import styles from './AdminHeader.module.scss';
import { SearchField } from '@/ui/search-field/SearchField';

interface IAdminHeader {
	searchTerm: string;
	onClick?: () => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AdminHeader: FC<IAdminHeader> = ({
	handleSearch,
	onClick,
	searchTerm,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateBtn onClick={onClick} />}
		</div>
	);
};
