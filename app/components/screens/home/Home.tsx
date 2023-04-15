import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();

	return (
		<View className='mt-10'>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text style={{ color: '#fff' }}>Go to login</Text>
			</Pressable>
		</View>
	);
};

export default Home;
