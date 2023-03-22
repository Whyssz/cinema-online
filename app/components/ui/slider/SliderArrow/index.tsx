import cn from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '../../materialIcon/MaterialIcon';

import styles from '../Slider.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right';
	clickHandler: () => void;
}

export const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left';

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	);
};
