import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { updCountOpened } from '@/config/constantsQuery';
import { MovieService } from '@/services/movie.service';

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation(updCountOpened, () =>
		MovieService.updateCountOpened(slug)
	);
  
	useEffect(() => {
		mutateAsync();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
