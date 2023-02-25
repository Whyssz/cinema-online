import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIcons } from '@/shared/types/icon.types';

export const MaterialIcon: FC<{ name: TypeMaterialIcons }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
 