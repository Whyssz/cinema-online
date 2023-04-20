import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { TypeFeatherIconNames } from '@/shared/types/icon.types';

export interface INavItem {
	iconName: TypeFeatherIconNames;
	path: keyof TypeRootStackParamList;
}

export interface INavItemProps {
	item: INavItem;
	nav: TypeNavigate;
	currentRoute?: string;
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void;

export interface INavBottom {
	nav: TypeNavigate;
	currentRoute?: string;
}
