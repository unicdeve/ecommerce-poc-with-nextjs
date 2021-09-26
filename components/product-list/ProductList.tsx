import { FC } from 'react';
import ProductListHeader from '../product-list-header/ProductListHeader';
import { StyledProductList } from './ProductList.Styled';

const ProductList: FC = () => {
	return (
		<StyledProductList className='container'>
			<ProductListHeader />
		</StyledProductList>
	);
};

export default ProductList;
