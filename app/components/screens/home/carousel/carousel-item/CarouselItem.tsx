import { FavoriteButton, GenreList, Rating } from '@/components/ui';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { IMovie } from '@/shared/types/movie.interface';
import { getMediaSource } from '@/utils/getMedialSource';
import { FC } from 'react';
import { Animated, Image, Pressable, Text, View } from 'react-native';
import { ITEM_SIZE, SPACING } from '../carousel.constant';
import { useItemAnimation } from './useItemAnimation';

interface ICarouselItem {
	index: number;
	scrollX: Animated.Value;
	movie: IMovie;
}

export const CarouselItem: FC<ICarouselItem> = ({ movie, scrollX, index }) => {
	const { navigate } = useTypedNavigation();

	const { opacityElements, opacity, rotate, scale } = useItemAnimation(
		index,
		scrollX
	);

	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View
				style={{
					padding: SPACING,
					transform: [{ rotate }, { scale }],
					opacity,
				}}
				className='items-center'
			>
				<Pressable
					onPress={() => navigate('Movie', { slug: movie.slug })}
					className='w-full relative'
				>
					<View className='absolute z-1 right-2 top-2'>
						<FavoriteButton movieId={movie._id} />
					</View>
					<Image
						source={getMediaSource(movie.poster)}
						className='w-full rounded-xl mb-2.5'
						style={{
							height: ITEM_SIZE * 1.3,
							resizeMode: 'cover',
							borderWidth: 1,
							borderColor: 'white',
						}}
					/>
				</Pressable>
				<Animated.View
					style={{ opacity: opacityElements }}
					className='items-center'
				>
					<Rating rating={movie.rating} />
					<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
						<Text
							className='text-white text-3xl font-semibold opacity-95 mb-2.5'
							numberOfLines={1}
						>
							{movie.title}
						</Text>
					</Pressable>
					<GenreList genres={movie.genres} />
				</Animated.View>
			</Animated.View>
		</View>
	);
};
