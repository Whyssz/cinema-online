import Auth from '@/components/screens/auth/Auth';
import Screen404 from '@/components/screens/system/Screen404';
import { useAuth } from '@/hooks/useAuth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useEffect } from 'react';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const PrivateNavigator: FC = () => {
	const { user } = useAuth();
	useEffect(() => {
	}, [user]);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#030303',
				},
			}}
		>
			{user ? (
				routes.map(route =>
					user.isAdmin || !route.isAdmin ? (
						<Stack.Screen key={route.name} {...route} />
					) : (
						<Stack.Screen
							key='Screen404'
							name='Screen404'
							component={Screen404}
						/>
					)
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	);
};
