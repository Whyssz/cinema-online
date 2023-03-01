import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

export const Logo: FC = () => {
	return (
		<Link href="/">
			<Image
				className="px-layout mx-auto mb-[40px] block"
				src={logoImage}
				width={247}
				height={34}
				draggable={false}
				alt="Company Logo"
			/>
		</Link>
	);
};
