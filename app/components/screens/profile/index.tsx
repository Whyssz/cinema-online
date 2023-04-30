import { Button, Heading, Layout, Loader } from '@/components/ui';
import { useAuth } from '@/hooks/useAuth';
import { useScaleOnMount } from '@/hooks/useScaleOnMount';
import { AuthService } from '@/service/auth/auth.service';
import { IAuthFormData } from '@/shared/types/auth.interface';
import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AuthFields } from '../auth/AuthFields';
import { useProfile } from './useProfile';

const Profile: FC = () => {
	const { setUser } = useAuth();

	const { setValue, reset, control, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useProfile(setValue);
	const { styleAnimation } = useScaleOnMount();

	return (
		<Layout className='mt-12' isHasPadding>
			<Heading title='Profile' />

			<Animated.View
				style={styleAnimation}
				className='mb-6 items-center justify-center'
			>
				<Image
					source={require('./avatar-guest.jpg')}
					className='w-40 h-40 rounded-2xl'
				/>
			</Animated.View>

			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon={'edit'}>
						Update Profile
					</Button>
				</View>
			)}

			<Pressable
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name={'logout'} size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</Layout>
	);
};

export default Profile;
