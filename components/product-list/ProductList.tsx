import Image from 'next/image';
import { FC } from 'react';
import { useProductPagination } from '../../contexts/pagination';
import { useAppStateContext } from '../../contexts/state';
import ProductCard from '../product-card/ProductCard';
import ProductListHeader from '../product-list-header/ProductListHeader';
import ProductListSidebar from '../product-sidebar/ProductListSidebar';
import { PageNumber, StyledProductList } from './ProductList.Styled';

const ProductList: FC = () => {
	let { filteredProducts } = useAppStateContext();

	const products = filteredProducts.filter((p) => !p.featured);

	const { lastPage, currentPage, jumpTo, next, prev } = useProductPagination();

	const pageNumbers = [];

	for (let i = 1; i <= lastPage; i++) pageNumbers.push(i);

	return (
		<StyledProductList className='container'>
			<ProductListHeader />

			<div className='products-container d-flex justify-between'>
				<aside>
					<ProductListSidebar />
				</aside>

				<div className='product-list'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>

			<div className='pagination'>
				{currentPage !== 1 && (
					<div className='back' onClick={prev}>
						<Image
							src='/images/back-icon.svg'
							alt='back'
							width='8'
							height='16'
						/>
					</div>
				)}

				{pageNumbers.map((number, i) => (
					<PageNumber
						className='page'
						key={number}
						highlight={currentPage === number}
						onClick={() => jumpTo(number)}
					>
						{number}
					</PageNumber>
				))}

				{currentPage !== lastPage && (
					<div className='next' onClick={next}>
						<Image
							src='/images/next-icon.svg'
							alt='next'
							width='8'
							height='16'
						/>
					</div>
				)}
			</div>
		</StyledProductList>
	);
};

export default ProductList;
