import cn from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';



import styles from '../Admin.module.scss';



import { AdminService } from '@/services/admin/admin.service';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';
import { getCountUsers } from '@/config/constantsQuery';


export const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery(getCountUsers, () =>
		AdminService.getCountUser()
	);

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoading />
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
				<div className={styles.description}>users</div>
			</div>
		</div>
	);
};