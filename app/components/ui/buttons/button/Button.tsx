import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC, PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';
import { IButton } from './button.interface';

export const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
	...rest
}) => {
	return (
		<Pressable {...rest} className={cn('self-center mt-3.5', className)}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				className={cn(
					'w-full py-3 px-8 rounded-2xl items-center',
					!!icon && 'flex-row'
				)}
				colors={['#dc3f41', '#a6282b']}
			>
				{icon && <Feather name={icon} color='white' size={18} />}
				<Text
					className={cn(
						'text-white text-center font-medium text-lg',
						!!icon && 'ml-2'
					)}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	);
};
