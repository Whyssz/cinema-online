import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/hooks/useRenderClient';
import { TypeMaterialIcons } from '@/shared/types/icon.types';

export const MaterialIcon: FC<{ name: TypeMaterialIcons }> = ({ name }) => {
	const isClient = useRenderClient();

	const IconComponent = MaterialIcons[name];

	if (isClient) {
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
	} else {
		return null;
	}
};
