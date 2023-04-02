import UserEdit from '@/screens/admin/users/edit/UserEdit';
import { NextPageAuth } from '@/shared/types/auth.types';

const UsersEditPage: NextPageAuth = () => {
	return <UserEdit />;
};

UsersEditPage.isOnlyAdmin = true;

export default UsersEditPage;
