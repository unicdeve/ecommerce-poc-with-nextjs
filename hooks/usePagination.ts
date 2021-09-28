import { useState } from 'react';

function usePagination(count: number, paginateBy: number) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageOffset, setPageOffset] = useState(0);
	const lastPage = Math.ceil(count / paginateBy);

	const next = () => {
		setPageOffset(
			Math.min(currentPage + 1, lastPage) * paginateBy - paginateBy
		);
		setCurrentPage((currentPage) => Math.min(currentPage + 1, lastPage));
	};

	const prev = () => {
		setPageOffset(Math.max(currentPage - 1, 1) * paginateBy - paginateBy);
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	};

	const jumpTo = (page: number) => {
		const pageNumber = Math.max(1, page);
		setPageOffset(Math.min(pageNumber, lastPage) * paginateBy - paginateBy);
		setCurrentPage((prevPage) => Math.min(pageNumber, lastPage));
	};

	return { next, prev, jumpTo, currentPage, lastPage, pageOffset };
}

export default usePagination;
