import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './AdminAction.module.scss';
import { MaterialIcon } from '@/ui/materialIcon/MaterialIcon';

interface IAdminActions {
	editUrl: string;
	removeHandler: () => void;
}

export const AdminAction: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter();

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};
