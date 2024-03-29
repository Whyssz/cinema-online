import { TypeMaterialIcons } from '@/shared/types/icon.types';

export interface IMenuItem {
	icon: TypeMaterialIcons;
	title: string;
	link: string;
}

export interface IMenu {
	title: string;
	items: IMenuItem[];
}
