import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { IHome } from './home.interface';
import { Gallery } from '@/ui/gallery/Gallery';
import styles from '@/ui/gallery/Gallery.module.scss';
import { Heading } from '@/ui/heading/Heading';
import { SubHeading } from '@/ui/heading/SubHeading';
import { Slider } from '@/ui/slider/Slider';

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides && <Slider slides={slides} />}

			<div className="mt-10">
				<SubHeading title="Trending now" />
				<div className={styles.wrapperGallery}>
					{trendingMovies && <Gallery items={trendingMovies} />}
				</div>
			</div>

			<div className="mt-10">
				<SubHeading title="Trending now" />
				<div className={styles.wrapperGallery}>
					{actors && <Gallery items={actors} />}
				</div>
			</div>
		</Meta>
	);
};

export default Home;
