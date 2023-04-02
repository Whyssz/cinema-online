import Image from 'next/image';
import { FC } from 'react';

import { ICollection } from './collection.interface';

export const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image src={image} alt={title} fill draggable={false} />;
};
