import { IGalleryItem } from '@/components/ui/gallery/gallery-types';
import { IMovie } from '@/shared/types/movie.types';

export interface IMoviePage {
	movie: IMovie | undefined;
	similarMovies: IGalleryItem[];
}

export interface IMovieSingle extends Pick<IMoviePage, 'similarMovies'> {
	movie: IMovie;
}
