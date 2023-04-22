import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/service/auth/auth.service';
import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

const Profile: FC = () => {
	const { setUser } = useAuth();

	return (
		<View className='mt-10 px-10'>
			<Pressable
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name={'logout'} size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</View>
	);
};

export default Profile;
