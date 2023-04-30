import { IMovie } from '@/shared/types/movie.interface';
import { FC, useRef } from 'react';
import { Animated, Platform, View } from 'react-native';
import { CarouselItem } from './carousel-item/CarouselItem';
import { EMPTY_ITEM_SIZE, ITEM_SIZE } from './carousel.constant';

export const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<Animated.FlatList
			data={[
				{ _id: 'first' } as IMovie,
				...movies,
				{ _id: 'second' } as IMovie,
			]}
			keyExtractor={item => item._id}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderToHardwareTextureAndroid
			contentContainerStyle={{
				alignItems: 'center',
			}}
			scrollEventThrottle={16}
			decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
			snapToInterval={ITEM_SIZE}
			snapToAlignment='start'
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { x: scrollX } } }],
				{ useNativeDriver: true }
			)}
			renderItem={({ item: movie, index }) =>
				movie?.slug ? (
					<CarouselItem movie={movie} index={index} scrollX={scrollX} />
				) : (
					<View style={{ width: EMPTY_ITEM_SIZE }} />
				)
			}
		/>
	);
};
