import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { Content } from './content/Content';
import { IMovieSingle } from './movie.interface';
import { useUpdateCountOpened } from './useUpdateCountOpened';
import { Banner } from '@/components/ui/banner/Banner';
import { Gallery } from '@/components/ui/gallery/Gallery';
import { SubHeading } from '@/components/ui/heading/SubHeading';

const DynamicVideo = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
);

const DynamicRating = dynamic(() => import('./rating-movie/RateMovie'), {
	ssr: false,
});

const SingleMovie: FC<IMovieSingle> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug);

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicVideo slug={movie.slug} videoSource={movie.videoUrl} />

			<div className="mt-12">
				<SubHeading title="Similar movies" />
				<div>
					<Gallery items={similarMovies} />
				</div>
			</div>

			<DynamicRating id={movie._id} slug={movie.slug} />
		</Meta>
	);
};

export default SingleMovie;
