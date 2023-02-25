import { FC } from 'react';

interface IHeading {
	title: string;
	className?: string;
}

export const Heading: FC<IHeading> = ({ title, className }) => {
	const classDefault = 'text-white text-opacity-80 font-semibold';
	const classRule = className?.includes('xl') ? '' : 'text-3xl';

	return (
		<h1 className={`${classDefault} ${classRule} ${className}`}>{title}</h1>
	);
};
