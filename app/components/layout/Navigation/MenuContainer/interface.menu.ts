import { TypeMaterialIcons } from '@/shared/types/icons.types';

export interface IMenuItem {
	icon: TypeMaterialIcons;
	title: string;
	link: string;
}
export interface IMenu {
	title: string;
	items: IMenuItem[];
}


