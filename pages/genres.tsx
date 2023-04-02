import { GetStaticProps, NextPage } from 'next';

import Error404 from './404';
import Collections from '@/components/screens/collections/Collections';
import { ICollection } from '@/components/screens/collections/collection.interface';
import { GenreService } from '@/services/genre.service';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections();

		return {
			props: {
				collections,
			},
		};
	} catch (error) {
		return {
				props: {}
		};
	}
};

export default GenresPage;
