import { TypeMaterialIcons } from './icon.types';

export interface IGenre {
	_id: string;
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIcons;
}
