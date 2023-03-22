import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { SkeletonLoading } from '../../heading/SkeletonLoading';
import { IUploadField } from '../form.interface';
import styles from '../form.module.scss';

import { useUpload } from './useUploads';

export const UploadField: FC<IUploadField> = ({
	folder,
	value,
	error,
	style,
	placeholder,
	isNoImage = false,
	onChange,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder);
	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoading count={1} className="w-full h-full" />
						) : (
							value && <Image alt="" src={value} fill unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	);
};
