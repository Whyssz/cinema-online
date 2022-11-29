import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoSVG from '@/assets/images/logo.svg';

export const Logo: FC = () => {
	return (
		<Link legacyBehavior href="/">
			<a className="flex justify-center cinema_logo">
				<Image
					src={logoSVG}
					width={250}
					height={35}
					alt="Logo cinema"
					draggable={false}
				/>
			</a>
		</Link>
	);
};
