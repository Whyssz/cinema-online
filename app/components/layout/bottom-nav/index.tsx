import { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { navItems } from './bottom-nav.data';
import { INavBottom } from './bottom-nav.interface';
import { NavItem } from './NavItem';

export const NavBottom: FC<INavBottom> = props => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			style={{ paddingBottom: bottom + 15 }}
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]'
		>
			{navItems.map(item => (
				<NavItem key={item.path} item={item} {...props} />
			))}
		</View>
	);
};
