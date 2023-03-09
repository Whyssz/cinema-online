import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Auth from '@/components/screens/auth/Auth';

const AuthPage: NextPage = () => {
	return <Auth />;
};

export default AuthPage;
