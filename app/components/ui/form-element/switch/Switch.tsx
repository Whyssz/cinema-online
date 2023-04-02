import cn from 'classnames';
import { FC } from 'react';

import styles from './Switch.module.scss';
import { ISwitch } from './switch.interface';

export const Switch: FC<ISwitch> = ({ style, onToggle = false, onToggled }) => {
	return (
		<div className={cn(styles.switch, style)}>
			<span className={styles.placeholder}>
				<span>Admin</span>
			</span>
			<label>
				<input type="checkbox" checked={onToggle} onChange={onToggled} />
				<span className={styles.slider} />
			</label>
		</div>
	);
};
