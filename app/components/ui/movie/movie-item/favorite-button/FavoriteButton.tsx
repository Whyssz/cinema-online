import { MaterialCommunityIcons } from '@expo/vector-icons';
import cn from 'clsx';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { withSpring } from 'react-native-reanimated';
import BlurButton from '../../../buttons/blur-button/BlurButton';
import { IFavoriteButton } from './favorite-button.interface';
import { useFavorite } from './useFavorite';
import { useFavoriteAnimation } from './useFavoriteAnimation';

export const FavoriteButton: FC<IFavoriteButton> = ({
	movieId,
	isSmall = false,
}) => {
	const { isSmashed, toggleFavorites } = useFavorite(movieId);
	const { fillStyle, liked, outlineStyle } = useFavoriteAnimation(isSmashed);

	return (
		<BlurButton
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1);
				toggleFavorites();
			}}
			className={cn(isSmall && 'w-8 h-8 rounded-lg')}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</Animated.View>
			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={isSmall ? 19 : 22}
					color={'#dc3f41'}
				/>
			</Animated.View>
		</BlurButton>
	);
};
