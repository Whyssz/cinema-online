import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { toastrError } from 'utils/toastr/toaster-error';

import { uploadFiles } from '@/config/constantsQuery';
import { FileService } from '@/config/file.service';

type TypeUpload = (
	onChange: (...events: any[]) => void,
	folder?: string
) => {
	isLoading: boolean;
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false);

	const { mutateAsync } = useMutation(
		uploadFiles,
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url);
			},
			onError: (error) => {
				toastrError(error, 'Upload image');
			},
		}
	);

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true);
			const files = e.target.files;

			if (!files?.length) return;

			const formData = new FormData();
			formData.append('file', files[0]);

			await mutateAsync(formData);

			setTimeout(() => setIsLoading(false), 1000);
		},
		[mutateAsync]
	);

	return useMemo(
		() => ({
			isLoading,
			uploadFile,
		}),
		[uploadFile, isLoading]
	);
};
