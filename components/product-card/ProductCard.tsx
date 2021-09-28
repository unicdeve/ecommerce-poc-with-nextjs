import Image from 'next/image';
import { FC } from 'react';
import { IProduct, useAppStateContext } from '../../contexts/state';
import AddToCartBtn from '../add-to-cart-btn/AddToCartBtn';
import { StyledProductCard } from './ProductCard.Styled';

interface IProps {
	product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
	let { addToCart, cart, openDropdown } = useAppStateContext();

	const inCart = !!cart.filter((item) => item.id === product.id).length;

	return (
		<StyledProductCard>
			<div className='img-wrap'>
				<Image
					src={product.image.src}
					alt={product.image.alt}
					layout='fill'
					objectFit='cover'
				/>

				{product.isBestseller && (
					<span className='best-seller-tag'>Best Seller</span>
				)}

				<div className='add-to-cart-wrapper'>
					<AddToCartBtn
						onClick={() => {
							addToCart(product);
							openDropdown();
						}}
						inCart={inCart}
					/>
				</div>
			</div>

			<div className='card-bottom'>
				<div className='category'>{product.category}</div>
				<h2>{product.name}</h2>
				<div className='price'>${product.price}</div>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
