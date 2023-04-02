import { ActorEdit } from '@/screens/admin/actors/edit/ActorEdit';
import { NextPageAuth } from '@/shared/types/auth.types';

const ActorsEditPage: NextPageAuth = () => {
	return <ActorEdit />;
};

ActorsEditPage.isOnlyAdmin = true;

export default ActorsEditPage;
