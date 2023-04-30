import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { BlurView } from 'expo-blur';
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { IBlurButton } from './blur-button.interface';

const BlurButton: FC<IBlurButton> = ({
	className,
	color = '#fff',
	icon,
	iconSize,
	isSmall = false,
	children,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={cn(
					'items-center justify-center overflow-hidden border-[0.4px]  border-white',
					className,
					isSmall ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-2xl'
				)}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	);
};

export default BlurButton;
