import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

type RoleProps = TypeComponentAuthFields & {
	children?: ReactNode | undefined;
};

const CheckRole: FC<RoleProps> = ({
	Component: { isOnlyAdmin, isOnlyUser },
	children,
}) => {
	const { user } = useAuth();

	const router = useRouter();

	const Children = () => <>{children}</>;

	if (!isOnlyAdmin && !isOnlyUser) return <Children />;

	if (user?.isAdmin) return <Children />;

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404');
		return null;
	}

	const isUser = user && !user.isAdmin;

	if (isUser && isOnlyUser) return <Children />;
	else {
		router.pathname !== '/auth' && router.replace('/auth');
		return null;
	}
};

export default CheckRole;
