import { FC, MouseEvent } from 'react';

import { MaterialIcon } from '@/components/ui/materialIcon/MaterialIcon';
import { useActions } from '@/hooks/useActions';

export const LogoutButton: FC = () => {
	const { logout } = useActions();

	const handleLogout = (e: MouseEvent) => {
		e.preventDefault();
		logout();
	};

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	);
};
