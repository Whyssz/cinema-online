import { FC } from 'react';

import { AdminAction } from './AdminAction/AdminAction';
import styles from './AdminTable.module.scss';
import { IAdminTableItem } from './admin-table.interface';

export const AdminTableItem: FC<IAdminTableItem> = ({
	removeHandler,
	tableItem,
}) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminAction editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	);
};
