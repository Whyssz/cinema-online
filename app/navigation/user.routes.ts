import Auth from '@/components/screens/auth/Auth';
import Favorites from '@/components/screens/favorites';
import Home from '@/components/screens/home/Home';
import Profile from '@/components/screens/profile';
import Search from '@/components/screens/search';
import Trending from '@/components/screens/trending';
import { adminRoutes } from './admin.routes';
import { IRoute } from './navigation.types';

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home,
	},
	{
		name: 'Auth',
		component: Auth,
	},
	{
		name: 'Favorites',
		component: Favorites,
	},
	{
		name: 'Profile',
		component: Profile,
	},
	{
		name: 'Trending',
		component: Trending,
	},
	{
		name: 'Search',
		component: Search,
	},
];

export const routes = [...userRoutes, ...adminRoutes];
