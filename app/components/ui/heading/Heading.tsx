import cn from 'clsx';
import { FC } from 'react';
import { Text } from 'react-native';
import { IHeading } from './heading.interface';

export const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<Text
			numberOfLines={1}
			className={cn(
				'text-white text-opacity-80 font-semibold text-3xl mb-5',
				className
			)}
		>
			{title}
		</Text>
	);
};
