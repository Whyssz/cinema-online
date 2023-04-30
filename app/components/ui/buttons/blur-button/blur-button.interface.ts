import { TypeFeatherIconNames } from '@/shared/types/icon.types';
import { PressableProps } from 'react-native';

export interface IBlurButton extends PressableProps {
	className?: string;
	icon?: TypeFeatherIconNames;
	isSmall?: boolean;
	iconSize?: number;
	color?: string;
	children?: React.ReactNode;
}
