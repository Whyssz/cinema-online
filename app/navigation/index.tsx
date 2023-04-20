import { NavBottom } from '@/components/layout/bottom-nav';
import { useAuth } from '@/hooks/useAuth';
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { PrivateNavigator } from './PrivateNavigator';

export const Navigation: FC = () => {
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	);

	const { user } = useAuth();
	const navRef = useNavigationContainerRef();

	useEffect(() => {
		// loading fix
		setCurrentRoute(navRef.getCurrentRoute()?.name);

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		);

		return () => {
			navRef.removeListener('state', listener);
		};
	}, []);

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<NavBottom nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	);
};
