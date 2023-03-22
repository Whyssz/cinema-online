import { FC } from 'react';
import { Meta } from 'utils/meta/Meta';

import { IHome } from './home.interface';
import { Slider } from '@/components/ui/slider/Slider';
import { Heading } from '@/ui/heading/Heading';

const Home: FC<IHome> = ({ slides }) => {
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
		</Meta>
	);
};

export default Home;
