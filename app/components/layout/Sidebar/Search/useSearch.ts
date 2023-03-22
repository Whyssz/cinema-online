import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { searchMovieHome } from '@/config/constantsQuery';
import { useDebounce } from '@/hooks/useDebounce';
import { MovieService } from '@/services/movie.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 400);
	// send value to get req
	const { isSuccess, data } = useQuery(
		[searchMovieHome, debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{ select: ({ data }) => data, 
		// not undefined
		enabled: !!debouncedSearch }
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(event.target.value);
	};

	return { data, isSuccess, handleSearch, searchTerm };
};
