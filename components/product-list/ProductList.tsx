import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import ProductCard from '../product-card/ProductCard';
import ProductListHeader from '../product-list-header/ProductListHeader';
import ProductListSidebar from '../product-sidebar/ProductListSidebar';
import { StyledProductList } from './ProductList.Styled';

const ProductList: FC = () => {
	let { filteredProducts } = useAppStateContext();

	const products = filteredProducts.filter((p) => !p.featured);

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
		</StyledProductList>
	);
};

export default ProductList;
