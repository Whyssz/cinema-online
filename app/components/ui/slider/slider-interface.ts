import { IMovie } from '@/shared/types/movie.types';

export interface ISlide extends Pick<IMovie, '_id' | 'title' | 'bigPoster'> {
	subTitle: string;
	link: string;
}

export interface ISlideItem {
	slide: ISlide;
	buttonTitle?: string;
}

export interface ISlider {
	slides: ISlide[];
	buttonTitle?: string;
}
