import cn from 'clsx';
import { FC, ReactNode } from 'react';
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native';

interface ILayout {
	className?: string;
	style?: StyleProp<ViewStyle>;
	isHasPadding?: boolean;
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({
	children,
	className,
	style,
	isHasPadding,
}) => {
	return (
		<SafeAreaView className='flex-1'>
			<View
				style={style}
				className={cn('flex-1', className, isHasPadding && 'px-6')}
			>
				{children}
			</View>
		</SafeAreaView>
	);
};
