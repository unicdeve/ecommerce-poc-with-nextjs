import { FC } from 'react';
import ProductCard from '../product-card/ProductCard';
import ProductListHeader from '../product-list-header/ProductListHeader';
import ProductListSidebar from '../product-sidebar/ProductListSidebar';
import { StyledProductList } from './ProductList.Styled';

const ProductList: FC = () => {
	return (
		<StyledProductList className='container'>
			<ProductListHeader />

			<div className='products-container d-flex justify-between'>
				<aside>
					<ProductListSidebar />
				</aside>

				<div className='product-list'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</StyledProductList>
	);
};

export default ProductList;
