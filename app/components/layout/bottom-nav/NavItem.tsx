import { getColor } from '@/util/config';
import { Feather } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable } from 'react-native';
import { INavItemProps } from './bottom-nav.interface';

export const NavItem: FC<INavItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = item.path === currentRoute;

	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? getColor('primary') : getColor('gray.400')}
			/>
		</Pressable>
	);
};
