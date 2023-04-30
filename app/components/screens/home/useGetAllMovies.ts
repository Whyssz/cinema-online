import { queryData } from '@/config/query.config';
import { MovieService } from '@/service/movie/movie.service';
import { useQuery } from '@tanstack/react-query';

export const useGetAllMovies = () => {
	const { data: movies, isLoading } = useQuery(
		[queryData.moviesAll],
		() => MovieService.getAll(),
		{
			select: data => data.slice(0, 10),
		}
	);
	
	return { movies, isLoading };
};
