import { FC } from 'react';
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
					<h1>Product list</h1>
				</div>
			</div>
		</StyledProductList>
	);
};

export default ProductList;
