import { useState } from 'react';
import { PAGINATE_BY } from '../contexts/pagination';
import { useAppStateContext } from '../contexts/state';
import { isBrowser } from '../utils/is-browser';

function usePagination(count: number, paginateBy: number) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageOffset, setPageOffset] = useState(0);
	const lastPage = Math.ceil(count / paginateBy);

	// Pagination calculation
	const { filteredProducts, setFilteredProducts } = useAppStateContext();

	const paginateProducts = (pageOffset: number) => {
		const paginatedProduct = filteredProducts.slice(
			pageOffset,
			pageOffset + PAGINATE_BY
		);
		setFilteredProducts(paginatedProduct);
		isBrowser && window.scrollTo(0, 1000);
	};

	const next = () => {
		const pageOffset =
			Math.min(currentPage + 1, lastPage) * paginateBy - paginateBy;
		paginateProducts(pageOffset);
		setPageOffset(pageOffset);
		setCurrentPage((currentPage) => Math.min(currentPage + 1, lastPage));
	};

	const prev = () => {
		const pageOffset = Math.max(currentPage - 1, 1) * paginateBy - paginateBy;
		paginateProducts(pageOffset);
		setPageOffset(pageOffset);
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	};

	const jumpTo = (page: number) => {
		const pageNumber = Math.max(1, page);
		const pageOffset = Math.min(pageNumber, lastPage) * paginateBy - paginateBy;
		paginateProducts(pageOffset);
		setPageOffset(pageOffset);
		setCurrentPage((prevPage) => Math.min(pageNumber, lastPage));
	};

	return { next, prev, jumpTo, currentPage, lastPage, pageOffset };
}

export default usePagination;
