import { FC } from 'react';

import styles from './AdminTable.module.scss';
import { AdminTableHeader } from './AdminTableHeader';
import { AdminTableItem } from './AdminTableItem';
import { IAdminTable } from './admin-table.interface';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';

export const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	isLoading,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoading count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						removeHandler={() => removeHandler(tableItem._id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	);
};
