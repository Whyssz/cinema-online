import { Tab } from '../Tab';



import { usePopularGenres } from './usePopularGenres';
import { SkeletonLoading } from '@/ui/heading/SkeletonLoading';

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres();

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoading count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Tab menu={{ title: 'Popular genres', items: data || [] }} />
	);
};

export default GenreMenu;