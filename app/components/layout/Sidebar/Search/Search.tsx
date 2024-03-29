import { FC } from 'react';

import styles from './Search.module.scss';
import { SearchList } from './SearchList/SearchList';
import { useSearch } from './useSearch';
import { SearchField } from '@/ui/search-field/SearchField';

export const Search: FC = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};
