import { createContext, FC, useContext, useMemo } from 'react';
import usePagination from '../hooks/usePagination';
import { useAppStateContext } from './state';

export const PAGINATE_BY = 6;

interface IPaginationContext {
	currentPage: number;
	lastPage: number;
	pageOffset: number;
	next: () => void;
	prev: () => void;
	jumpTo: (page: number) => void;
}

const PaginationContext = createContext<IPaginationContext>(undefined as any);

export const PaginationProvider: FC<{}> = ({ children }) => {
	const { filteredProducts } = useAppStateContext();
	const { next, prev, jumpTo, currentPage, lastPage, pageOffset } =
		usePagination(filteredProducts.length, PAGINATE_BY);

	const value = useMemo(
		() => ({ next, prev, jumpTo, currentPage, lastPage, pageOffset }),
		[next, prev, jumpTo, currentPage, lastPage, pageOffset]
	);

	return (
		<PaginationContext.Provider value={value}>
			{children}
		</PaginationContext.Provider>
	);
};

const useProductPagination = () => useContext(PaginationContext);

export { PaginationContext, useProductPagination };
