import cn from 'classnames';
import parser from 'html-react-parser';
import { FC } from 'react';

export const Description: FC<{ text: string; className?: string }> = ({
	text,
	className,
}) => {
	return (
		<div
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{parser(text)}
		</div>
	);
};
